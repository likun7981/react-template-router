import NotFound from 'components/NotFound'

const routeContext = require.context('.', true, /\.\/[a-z|_|-]+\/(index.js)$/)

const routes = routeContext.keys().map(key => routeContext(key).default)

routes.push({
  path: '*',
  component: NotFound,
})

export default routes
