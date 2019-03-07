'use strict'

/*
 * adonis-bugsnag
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { Config, Env } = require('@adonisjs/sink')
const FlutterwaveRave = require('../src/FlutterwaveRave/index.js')

let FlutterwaveRaveStub = null

test.group('AdonisJS FlutterwaveRave Test(s)', (group) => {
  group.beforeEach(() => {
    FlutterwaveRaveStub = require('./setup/api-stub.js')

    this.config = new Config()
    this.env = new Env()
  })

  test('instantiate without errors or side-effects [yet]', (assert) => {
    this.config.set('ravepay.publicKey', 'FLWPUBK-e64d8e6748e94f8a309e09349ebc8e4e-C')
    this.config.set('ravepay.privateKey', 'FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X')
    this.env.set('NODE_ENV', 'development')

    const FlutterwaveRaveInstance = new FlutterwaveRave(FlutterwaveRaveStub, this.config, this.env)

    assert.isTrue(typeof FlutterwaveRaveInstance.agent.Card.charge === 'function')
    assert.isTrue(typeof FlutterwaveRaveInstance.agent.TokenCharge.card === 'function')
  })
})
