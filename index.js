/*!
 * softuni-nodejs-exam <https://github.com/tunnckoCore/softuni-nodejs-exam>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Extract to `koa-bel`
 */

var path = require('path')

function koaBel (dir, opts) {
  if (typeof dir !== 'string') {
    throw new TypeError('koa-bel: expect `dir` to be string')
  }
  opts = typeof opts === 'object' ? opts : {}
  opts.cwd = typeof opts.cwd === 'string' ? opts.cwd : process.cwd()
  dir = path.resolve(opts.cwd, dir)

  return function (ctx, next) {
    ctx.render = function render (fp, state) {
      var view = require(path.join(dir, fp))
      ctx.body = view(state).toString('utf8')
      return ctx
    }
    return next()
  }
}

var Koa = require('koa')
var app = new Koa()

app.use(koaBel('./views'))
app.use(function (ctx, next) {
  ctx.render('home2.js', {
    title: 'Homepage',
    description: 'This is example of `koa-bel` awesomeness!! :D',
    items: ['grizzly', 'cat', 'frog']
  })
  return next()
})
app.listen(4433)
