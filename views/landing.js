'use strict'

var bel = require('bel')
var layout = require('./layouts/default')
var extend = require('extend-shallow')

module.exports = function index (state) {
  state = extend({}, state, {
    title: state.pages.landing.title,
    body: bel`<section>
      <h1>${state.pages.landing.title}</h1>
      <p>${state.pages.landing.descr}</p>
    </section>`
  })
  return bel`${layout(state)}`
}
