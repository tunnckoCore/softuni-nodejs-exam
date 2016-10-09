'use strict'

var bel = require('bel')
var layout = require('../layouts/default')
var extend = require('extend-shallow')

module.exports = function index (state) {
  state = extend({}, state, {
    title: state.pages.index.title,
    body: bel`<section>
      <h1>${state.pages.index.title}</h1>
      <p>${state.pages.index.descr}</p>
      ${state.todos.length ? bel`<ul>${state.todos.map(function (todo) {
        return bel`<li>${todo.title} / ${todo.state}</li>`
      })}</ul>` : 'List is empty... Go create one.'}
    </section>`
  })
  return bel`${layout(state)}`
}
