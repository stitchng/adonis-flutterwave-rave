'use strict'

/**
 * adonis-flutterwave-rave
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com> | Aziz Abdul <>
 */

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('ravepay.js', path.join(__dirname, 'config/ravepay.js'))
    cli.command.completed('create', 'config/ravepay.js')
  } catch (error) {
    // ignore if ravepay.js already exists
  }
}
