/*!
 * softuni-nodejs-exam <https://github.com/tunnckoCore/softuni-nodejs-exam>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

// GET /todos
exports.index = function * index (next) {
  this.render('todos/index', this.config({
    todos: []
  }))
}

// GET /todos/new
exports.new = function * new_ (next) {
  this.render('todos/new', this.config({
    // form: form.toString()
  }))
}

// POST /todos
exports.create = function * create (next) {}

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
