/*!
 * softuni-nodejs-exam <https://github.com/tunnckoCore/softuni-nodejs-exam>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var bel = require('bel')
var Koa = require('koa')
var views = require('koa-bel')
var app = new Koa()

var body = require('koa-better-body')
var extend = require('extend-shallow')
var Resource = require('koa-resource-router')

// GET     /todos             ->  index
// GET     /todos/new         ->  new
// POST    /todos             ->  create
// GET     /todos/:user       ->  show
// GET     /todos/:user/edit  ->  edit
// PUT     /todos/:user       ->  update
// DELETE  /todos/:user       ->  destroy

var CONFIG = {
  project: 'Restful Koa',
  title: 'Welcome page',
  description: 'This is funky landing page, bro!',
  menu: [
    { text: 'Home', link: '/' },
    { text: 'Create', link: '/todos/new' },
    { text: 'List', link: '/todos' }
  ],
  db: {}
}

app
  .use(views('./views'))
  .use(body({
    uploadDir: './images'
  }))
  .use(function (ctx, next) {
    if (ctx.url === '/') {
      ctx.render('index', extend(CONFIG, {
        title: 'Welcome page',
        description: 'This is funky landing page, bro!'
      }))
    }
    return next()
  })

var todos = new Resource('todos', {
  // GET /todos
  index: function * (next) {
    this.render('todos/index', extend(CONFIG, {
      title: 'List of TODOs',
      description: `Fancy list of all TODOs in the in-memory database.
      The "pending" TODOs are above, "done" below.
      `,
      todos: []
    }))
  },
  // GET /todos/new
  new: function * (next) {
    this.render('todos/new', extend(CONFIG, {
      title: 'Create new TODO',
      description: `We basically can add TODO with a title,
      description and state. If state is not given, it is "pending"
      by default. Later we will be able to upload "file" to each TODO.`,
      form: bel`sasa`.toString()
    }))
  }
  // // POST /todos
  // create: function * (next) {
  // },
  // // GET /todos/:id
  // show: function * (next) {
  // },
  // // GET /todos/:id/edit
  // edit: function * (next) {
  // },
  // // PUT /todos/:id
  // update: function * (next) {
  // },
  // // DELETE /todos/:id
  // destroy: function * (next) {
  // }
})

app.use(todos.middleware())
app.listen(4290)
