'use strict'

var bel = require('bel')
var layout = require('../layout')
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

function createForm () {
  return bel`<form action="/todos" method="post">
    ${createInput('title')}
    ${createInput('description')}
    ${createInput('state')}
    ${createButton()}
  </form>`
}

function createInput (name) {
  var human = name.charAt(0).toUpperCase() + name.slice(1)
  return bel`<p>${human}: <input type="text" name="${name}"></p>`
}

function createButton () {
  return bel`<button type="submit">Create</button>`
}
