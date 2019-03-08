'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class FlutterwaveRaveProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/FlutterwaveRave', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const Env = this.app.use('Env')
      const FlutterwaveRave = require('../src/FlutterwaveRave/index.js')
      return (new FlutterwaveRave(require('ravepay'), Config, Env)).agent
    })
    
    this.app.alias('Adonis/Addons/FlutterwaveRave', 'FlutterwaveRave')
  }
}

module.exports = FlutterwaveRaveProvider
