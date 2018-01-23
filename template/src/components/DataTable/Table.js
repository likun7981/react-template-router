import React from 'react'
import PropTypes from 'prop-types'
import { Form, Table as AntdTable, Icon } from 'antd'
import request from 'utils/fetch'
import pagination from './pagination'
import AnimteBody from './animateBody'
import './DataTable.less'

const noop = message => result => {
  message && console.warn(message)
  return result
}

class DataTable extends React.Component {
  static propTypes = {
    fetch: PropTypes.shape({
      /** 请求的接口 */
      url: PropTypes.string.isRequired,
      /** 额外需要传递的请求参数 */
      extraParams: PropTypes.object,
      /**
       * 函数第一个参数为原始返回的请求
       * 函数需要返回有total 和 dataSource两个属性的对象
       */
      mapDataSource: PropTypes.func,
    }),
    /** 参照[Pagination](http://2x.ant.design/components/pagination-cn/#API)组件 */
    pagination: PropTypes.object,
    /** 是否需要动画 */
    animate: PropTypes.bool,
  }
  static defaultProps = {
    pagination: pagination,
    animate: false,
  }
  state = {
    dataSource: [],
    loading: false,
    error: undefined,
    pagination: undefined,
  }
  componentDidMount () {
    this.fetch()
  }
  getCondition = key => {
    return this.state[key] || this.props[key]
  }
  fetch = (pagination, filter = {}, sorter = {}) => {
    pagination = pagination || this.getCondition('pagination')
    filter = filter || this.getCondition('filter')
    sorter = sorter || this.getCondition('sorter')
    const fetchCond = {
      current: pagination.current,
      limit: pagination.pageSize,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filter,
    }
    const {
      fetch: {
        url,
        extraParams = {},
        mapDataSource = noop(
          '"mapDataSource" is not set, we will use default result'
        ),
        mapCondKey = noop(
          '"mapCondKey" is not set, we will use default conditionKey'
        ),
      },
    } = this.props
    this.setState({
      loading: true,
      error: null,
      filter,
      sorter,
    })
    const sendParams = {
      ...extraParams,
      ...mapCondKey(fetchCond),
    }
    request(url, sendParams)
      .success(result => {
        const data = mapDataSource(result)
        pagination.total = data.total || pagination.total
        this.setState({
          dataSource: data.dataSource,
          pagination: pagination,
        })
      })
      .complete(error => {
        if (error) {
          return this.setState({
            error: error.message,
            loading: false,
          })
        }
        this.setState({
          loading: false,
          error: null,
        })
      })
  }
  render () {
    const {
      pagination = this.props.pagination,
      loading,
      dataSource,
      error,
    } = this.state
    const {
      fetch,
      Table = AntdTable,
      animate,
      children,
      columns,
      ...otherProps
    } = this.props
    const getBodyWrapper = animate
      ? body => (
          <AnimteBody
            page={pagination.pageSize}
            current={pagination.current}
            body={body}
          />
        )
      : children
    let getEmptyText = (
      <span>
        <Icon type="frown-o" /> 暂无数据
      </span>
    )
    if (error) {
      getEmptyText = (
        <span>
          {error}, 点击<a onClick={this.fetch}>重新加载</a>
        </span>
      )
    }
    const finalColumns =
      typeof columns === 'function' ? columns(this.fetch) : columns
    return (
      <Table
        loading={loading}
        {...otherProps}
        columns={finalColumns}
        locale={{
          emptyText: getEmptyText,
        }}
        dataSource={dataSource}
        onChange={this.fetch}
        pagination={pagination}
        getBodyWrapper={getBodyWrapper}
      />
    )
  }
}

export default Form.create()(DataTable)
