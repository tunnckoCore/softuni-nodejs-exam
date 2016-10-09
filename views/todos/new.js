'use strict'

var bel = require('bel')

module.exports = function index (state) {
  // @todo extract duplicate code
  return bel`<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>${state.title} - ${state.project}</title>
    <link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,">
  </head>
  <body>
    <h1>${state.title}</h1>
    <p>${state.description}</p>
    <ul>${state.menu.map((item) => {
      return bel`<li><a href="${item.link}">${item.text}</a></li>`
    })}
    </ul>
    <hr>
    ${state.form}
  </body>
</html>`
}
