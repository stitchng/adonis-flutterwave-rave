'use strict';

const Env = use('Env');

module.exports = {
	/*
  |-----------------------------------------------------------------
	| Public Key
	|-----------------------------------------------------------------
	|
	|
	|
	|
	|
	|
	*/
	publicKey: Env.get('FLUTTERWAVE_RAVE_API_PUBLIC_KEY'),
  
  /*
  |-----------------------------------------------------------------
	| Private Key
	|-----------------------------------------------------------------
	|
	|
	|
	|
	|
	|
	*/
	privateKey: Env.get('FLUTTERWAVE_RAVE_API_SECRET_KEY')

};
