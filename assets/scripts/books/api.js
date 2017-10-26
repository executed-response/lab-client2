'use strict'

const booksList = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
  })
}

module.exports = {
  booksList
}
