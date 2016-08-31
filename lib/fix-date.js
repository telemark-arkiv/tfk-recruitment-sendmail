'use strict'

function zeroPadding (input) {
  if (input.toString().length === 1) {
    return '0' + input.toString()
  } else {
    return input
  }
}

module.exports = (datestring) => {
  var dato = datestring ? new Date(datestring) : new Date()

  return dato.getFullYear() + '-' + zeroPadding((dato.getMonth() + 1)) + '-' + zeroPadding(dato.getDate())
}
