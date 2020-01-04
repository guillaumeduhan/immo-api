/*
 * 404 route
 */

'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/api/',
    handler(request, h) {
      const data = { status: 404, message: 'Wrong route, bro!' }
      return h.response(data).code(404)
    },
  },
]
