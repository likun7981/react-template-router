更多属性请参照 [Table](http://2x.ant.design/components/table-cn/#Table)

### 1. 基本使用

```js
const columns = [
  {
    title: "编码",
    width: 100,
    dataIndex: "id"
  },
  {
    title: "名字",
    dataIndex: "name"
  }
];
const fetch = {
  url: "http://localhost:3000/api/users",
  mapDataSource: result => ({ dataSource: result.data, total: result.total })
};
<DataTable
  fetch={fetch}
  scroll={{
    y: 200
  }}
  size="small"
  rowKey="id"
  columns={columns}
/>;
```

### 2. 添加额外参数

```js
const columns = [
  {
    title: "编码",
    width: 100,
    dataIndex: "id"
  },
  {
    title: "名字",
    dataIndex: "name"
  }
];
const fetch = {
  url: "http://localhost:3000/api/users",
  extraParams: {
    name: "孟"
  },
  mapDataSource: result => ({ dataSource: result.data, total: result.total })
};
<DataTable
  fetch={fetch}
  scroll={{
    y: 200
  }}
  size="small"
  rowKey="id"
  columns={columns}
/>;
```

### 3. 添加动画

```js
const request = require("utils/fetch").default;
const React = require("react");

const Fragment = React.Fragment;

function deleteLine(id, update) {
  return function() {
    request("DELETE http://localhost:3000/api/users/" + id);
    update();
  };
}
function addLine() {
  request("DELETE http://localhost:3000/api/users");
}

const columns = update => [
  {
    title: "编码",
    width: 100,
    dataIndex: "id"
  },
  {
    width: 100,
    title: "名字",
    dataIndex: "name"
  },
  {
    title: "编辑",
    render: ({ id }) => (
      <Fragment>
        <a onClick={deleteLine(id, update)}>删除</a> |{" "}
        <a onClick={addLine}>添加</a>
      </Fragment>
    )
  }
];
const fetch = {
  url: "http://localhost:3000/api/users",
  mapDataSource: result => ({ dataSource: result.data, total: result.total })
};

<DataTable
  fetch={fetch}
  animate={true}
  scroll={{
    y: 200
  }}
  size="small"
  rowKey="id"
  columns={columns}
/>;
```
