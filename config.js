/*!
 * softuni-nodejs-exam <https://github.com/tunnckoCore/softuni-nodejs-exam>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = {
  db: {},
  project: 'SoftUni Restful Koa',
  menu: [
    { text: 'Home', link: '/' },
    { text: 'Create', link: '/todos/new' },
    { text: 'List', link: '/todos' }
  ],
  pages: {
    landing: {
      title: 'Welcome page',
      descr: 'This is funky landing page, bro!'
    },
    index: {
      title: 'List TODOs',
      descr: `Fancy list of all TODOs in the in-memory database.
      The "pending" TODOs are above, "done" below.`
    },
    new: {
      title: 'Create new TODO',
      descr: `We basically can add TODO with a title,
      description and state. If state is not given, it is "pending"
      by default. Later we will be able to upload "file" to each TODO.`
    }
    // create: {}, // POST
    // show: {},   // data will come from the ID
    // update: {}, // POST/PUT/PATCH
  }
}
