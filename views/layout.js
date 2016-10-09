'use strict'

var bel = require('bel')

module.exports = function index (state) {
  return bel`<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>${state.title} - ${state.project}</title>
    <link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,">
  </head>
  <body>
    ${state.body}
  </body>
</html>`
}