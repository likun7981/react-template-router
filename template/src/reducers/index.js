

const reducerContext = require.context(
  '..',
  true,
  /\/reducers\/(?!index(\.js)?$)\S+\.js$/
)
const reducers = reducerContext.keys().reduce((r, key) => {
  const reducerKey = key
    .substring(key.lastIndexOf('reducers'))
    .replace(/(reducers\/|\.js)/g, '')
  let reducer = reducerContext(key)
  reducer = reducer.default || reducer
  if (Object.prototype.toString.apply(reducer) === '[object Object]') {
    r = Object.assign({}, r, reducer)
  } else if (typeof reducer === 'function') {
    if (r[reducerKey]) {
      console.warn(
        `reducer key '${reducerKey}' already exists, please rename the file '${reducerContext.resolve(
          key
        )}'`
      )
      return r
    }
    r[reducerKey] = reducer
  }
  return r
}, {})

export default reducers
