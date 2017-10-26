'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./books/events.js')

$(() => {
  setAPIOrigin(location, config)
  events.addHandlers()
})
