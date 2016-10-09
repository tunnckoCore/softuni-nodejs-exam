'use strict'

var bel = require('bel')

module.exports = function createInput (name) {
  var human = name.charAt(0).toUpperCase() + name.slice(1)
  return bel`<p>${human}: <input type="text" name="${name}"></p>`
}
