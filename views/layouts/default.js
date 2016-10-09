'use strict'

var bel = require('bel')

module.exports = function index (state) {
  return bel`<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>${state.title} - ${state.project}</title>
    <link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon;,">
  </head>
  <body>
    <ul>${state.menu.map((item) => {
      return bel`<li><a href="${item.link}">${item.text}</a></li>`
    })}</ul>
    <hr>
    ${state.body}
  </body>
</html>`
}
