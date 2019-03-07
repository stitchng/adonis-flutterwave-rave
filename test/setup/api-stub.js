
const RaveAPI = function (pubKey, priKey, prodFlag) {
  this.pubKey = pubKey
  this.priKey = priKey
  this.prodFlag = prodFlag
}

RaveAPI.prototype.Card = {
  charge: function () {}
}

RaveAPI.prototype.TokenCharge = {
  card: function () {}
}

module.exports = RaveAPI
