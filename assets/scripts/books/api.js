'use strict'
const config = require('../config')

const booksList = function () {
  return $.ajax({
    url: config.apiOrigin + 'books',
    method: 'GET'
  })
}

module.exports = {
  booksList
}
