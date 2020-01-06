'use strict'

const routes = [].concat(
  require('../routes/404'),
  require('../routes/post'),
  require('../routes/user'),
  require('../routes/api')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    },
  },
}
