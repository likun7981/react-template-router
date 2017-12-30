import React from 'react'
import PropTypes from 'prop-types'
import { Form, Table, Icon } from 'antd'
import request from 'utils/fetch'
import pagination from './pagination'
import AnimteBody from './AnimateBody'
import './DataTable.less'

const noop = message => result => {
  message && console.warn(message)
  return result
}

class DataTable extends React.Component {
  static propTypes = {
    fetch: PropTypes.shape({
      url: PropTypes.string.isRequired,
      extraParams: PropTypes.object,
      mapDataSource: PropTypes.func,
    }),
    pagination: PropTypes.object,
    Table: PropTypes.object,
    animate: PropTypes.object,
  }
  static defaultProps = {
    pagination: pagination,
    Table: Table,
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
      pagination: pg,
      Table,
      animate,
      children,
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
    return (
      <Table
        loading={loading}
        {...otherProps}
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
