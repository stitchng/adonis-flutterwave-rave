'use strict';

const Event = use('Event')
const Env = use('Env')

class FlutterwaveRaveAPIClient {
      constructor(Agent, Config) {
          this.agent = new Agent(
              Config.get('rave.publicKey'),
              Config.get('rave.privateKey')
              (Env.get('NODE_ENV') !== 'development') // production flag
          );
        
      }
};

module.exports = FlutterwaveRaveAPIClient
