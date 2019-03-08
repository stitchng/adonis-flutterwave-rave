# adonis-flutterwave-rave
An addon/plugin package to provide Flutterwave (Rave) payment services in AdonisJS 4.0+

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls][coveralls-image]][coveralls-url]

<img src="http://res.cloudinary.com/adonisjs/image/upload/q_100/v1497112678/adonis-purple_pzkmzt.svg" width="200px" align="right" hspace="30px" vspace="140px">

## Getting Started

>Install from the NPM Registry

```bash

    $ adonis install adonisjs-flutterwave-rave

```

>Import and use 

```js

  'use strict'
  
  const Rave = use('FlutterwaveRave')
  
  class PaymentsController {
  
      constructor(BillsHistory){
          this.bills_history = BillsHistory
      }
      
      static get inject(){
          return [
              'App/Models/BillsHistory'
          ]
      }
      
      async chargeCard({ request, session, response }){
      
          let response = await Rave.Card.charge({
              cardno: "5273938738903039399"
          })
          
          console.log("RESULT: ", response.body.data)
          
          return response.status(200).json({
             data:response.body.data
          })
      }
  }
  
  module.exports = PaymentsController

```

## License

MIT

## Running Tests

```bash

    npm i

```

```bash

    npm run lint
    
    npm run test

```

## Credits

- [Ifeora Okechukwu <Head Of Technology - Oparand>](https://twitter.com/isocroft)
- [Ahmad Aziz <Head - NodeJS Foundation>](https://instagram.com/dev_amaz)
    
## Contributing

See the [CONTRIBUTING.md](https://github.com/stitchng/adonis-flutterwave-rave/blob/master/CONTRIBUTING.md) file for info

[npm-image]: https://img.shields.io/npm/v/adonisjs-flutterwave-rave.svg?style=flat-square
[npm-url]: https://npmjs.org/package/adonisjs-flutterwave-rave

[travis-image]: https://img.shields.io/travis/stitchng/adonis-flutterwave-rave/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/stitchng/adonis-flutterwave-rave

[coveralls-image]: https://img.shields.io/coveralls/stitchng/adonis-flutterwave-rave/develop.svg?style=flat-square

[coveralls-url]: https://coveralls.io/github/stitchng/adonis-flutterwave-rave
