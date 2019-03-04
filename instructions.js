'use strict'

/**
 * adonis-bugsnag
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com> | Aziz Abdul <>
 */

const path = require('path')

module.exports = async function (cli) {
  await cli.makeConfig('ravepay.js', path.join(__dirname, 'config/ravepay.js'))
    .catch((e) => {})

  cli.command.completed('create', 'config/ravepay.js')
}