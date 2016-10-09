'use strict'

var bel = require('bel')
var layout = require('./layout')

module.exports = function index (state) {
  return bel`${layout(state)}`
}
