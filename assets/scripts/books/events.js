'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBooksButton = function (event) {
  api.booksList()
    .then(ui.booksListSuccess)
    .catch(ui.booksListFailure)
}

const addHandlers = function () {
  $('#getBooksButton').on('click', onGetBooksButton)
}

module.exports = {
  addHandlers
}
