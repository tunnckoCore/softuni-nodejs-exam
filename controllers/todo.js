/*!
 * softuni-nodejs-exam <https://github.com/tunnckoCore/softuni-nodejs-exam>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

// GET /todos
exports.index = function * index (next) {
  var todos = []
  Object.keys(this.store.data).forEach(function (id) {
    todos.push(this.store.data[id])
  }, this)
  this.render('todos/index', this.config({
    todos: todos
  }))
}

// GET /todos/new
exports.new = function * new_ (next) {
  this.render('todos/new', this.data)
}

// POST /todos
exports.create = function * create (next) {
  var message = 'Successfully created TODO!'
  var isError = false
  var fields = this.request.fields

  fields.state = fields.state.length && fields.state || 'pending'
  if (!fields.title.length || !fields.description.length) {
    isError = true
    message = 'Title and description are required.'
  }
  if (!isError) {
    var id = Object.keys(this.store.data) + 1
    this.store.set(id, {
      id: id,
      img: null,
      comments: [],
      title: fields.title,
      state: fields.state,
      description: fields.description
    })
  }

  this.render('todos/create', this.config({
    fields: fields,
    isError: isError,
    message: message
  }))
}

// GET /todos/:id
exports.show = function * show (next) {}

// will will not have
// GET /todos/:id/edit
// exports.edit = function * edit (next) {}

// PUT /todos/:id (or PATCH)
exports.update = function * update (next) {}

// will will not have
// DELETE /todos/:id
// exports.destroy = function * destroy (next) {}
