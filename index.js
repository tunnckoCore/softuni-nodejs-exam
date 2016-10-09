/*!
 * softuni-nodejs-exam <https://github.com/tunnckoCore/softuni-nodejs-exam>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var Koa = require('koa')
var views = require('koa-bel')
var app = new Koa()

var body = require('koa-better-body')
var extend = require('extend-shallow')
var Resource = require('koa-resource-router')

app
  .use(views('./views'))
  .use(body({
    uploadDir: './images'
  }))
  .use(function (ctx, next) {
    ctx.data = require('./config')
    ctx.config = function config (data) {
      ctx.data = extend({}, ctx.data, data)
      return ctx
    }
    if (ctx.url === '/') {
      ctx.render('landing', ctx.data)
    }
    return next()
  })

var todos = new Resource('todos', require('./controllers/todo'))

app.use(todos.middleware())
app.listen(4290)
