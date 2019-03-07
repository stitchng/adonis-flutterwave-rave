'use strict'

// const Event = use('Event')

class FlutterwaveRaveAPIClient {
  constructor (Agent, Config, Env) {
    this.agent = new Agent(Config.get('ravepay.publicKey'), Config.get('ravepay.privateKey'), (Env.get('NODE_ENV') !== 'development'))
  }
};

module.exports = FlutterwaveRaveAPIClient
