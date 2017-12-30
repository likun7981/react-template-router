export default {
  showSizeChanger: true,
  showQuickJumper: true,
  size: 'small',
  pageSize: 10,
  current: 1,
  showTotal: (all, range) => `current ${range[0]}-${range[1]}／total ${all}`,
  total: 10,
}
