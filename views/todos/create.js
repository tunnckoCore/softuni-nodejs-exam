'use strict'

var bel = require('bel')
var layout = require('../layouts/default')
var extend = require('extend-shallow')

module.exports = function new_ (state) {
  var title = state.isError ? 'Error - Create TODO' : 'Okey - Create TODO'

  state = extend({}, state, {
    title: title,
    body: bel`<section>
      <h1>${title}</h1>
      <p>${state.message}</p>
    </section>`
  })
  return bel`${layout(state)}`
}
