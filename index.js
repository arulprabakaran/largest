'use strict'
module.exports = function largest (values) {
  return Math.max.apply(Math, Array.isArray(values) ? values : arguments)
}