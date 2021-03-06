'use strict'

var bel = require('bel')
var layout = require('../layouts/default')
var createForm = require('../elements/createForm')
var extend = require('extend-shallow')

module.exports = function new_ (state) {
  state = extend({}, state, {
    title: state.pages.new.title,
    body: bel`<section>
    <h1>${state.pages.new.title}</h1>
    <p>${state.pages.new.descr}</p>
    ${createForm()}</section>`
  })
  return bel`${layout(state)}`
}
