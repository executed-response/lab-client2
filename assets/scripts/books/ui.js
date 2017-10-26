const showBooksTemplate = require('../templates/bookTable.handlebars')

const booksListSuccess = function (data) {
  const showBooksHtml = showBooksTemplate({ books: data.books }) // this is putting the data object that contains all the rounds into a rounds object it can use when the method defined in HandleBars is invoked
  $('.booksList').html(showBooksHtml)
}

module.exports = {
  booksListSuccess
}
