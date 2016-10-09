'use strict'

var bel = require('bel')
var createInput = require('./createInput')
var createButton = require('./createButton')

module.exports = function createForm () {
  return bel`<form action="/todos" method="post">
    ${createInput('title')}
    ${createInput('description')}
    ${createInput('state')}
    ${createButton()}
  </form>`
}
