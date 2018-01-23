export default {
  restful: {
    mapParams: {
      name: 'name_like',
      current: '_page',
      limit: '_limit',
    },
  },
  models: {
    'users|100': [
      {
        'id|+1': 1,
        name: '@cname',
      },
    ],
  },
  save: true,
  prefix: 'api',
  render: (data, req, res) => {
    if (Array.isArray(data)) {
      return {
        data: data,
        total: res.getHeaders()['x-total-count'],
      }
    }
    return data
  },
}
