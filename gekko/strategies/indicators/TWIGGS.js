const WIMA = require('./WILDERS.js');

const Indicator = function() {
  this.input = 'candle';
  this.age = 0;
  this.length = 21;
  this.wma = new WIMA(this.length);
  this.wmv = new WIMA(this.length);
  this.tmf = new WIMA(this.length);
  this.result = null;
  this.prev = {
    candle: null,
    advWiMA: null,
    wvWiMA: null
  };
  this.debug = {};
};

function nz(num) {
  return (num === NaN || num === null || num === undefined) ? 0 : num;
}

function WiMA(src, prev, length) {
  console.log('WiMA', src, prev, length);
  return (src + nz(prev * (length - 1))) / length;
}

Indicator.prototype.update = function(candle) {
  if (!this.prev.candle) this.prev.candle = candle;
  let trh = Math.max(this.prev.candle.close, candle.high);
  let trl = Math.min(this.prev.candle.close, candle.low);
  let trc = trh - trl;

  let adv = candle.volume * ((candle.close - trl) - (trh - candle.close)) / (trc === 0 ? 9999999 : trc);
  let advMA = this.wma.update(adv);
  let advWiMA = WiMA(adv, this.prev.advWiMA, this.length);

  let wv = candle.volume //+ (this.prev.candle.volume * 0);
  let wvMA = this.wmv.update(wv);
  let wvWiMA = WiMA(wv, this.prev.wvWiMA, this.length);

  let tmf = wvMA === 0 ? 0 : (advMA / wvMA);
  let tmfW = wvWiMA === 0 ? 0 : (advWiMA / wvWiMA);

  this.debug = {
    trh: trh,
    trl: trl,
    trc: trc,
    adv: adv,
    advMA: advMA,
    advWiMA: advWiMA,
    wv: wv,
    wvMA: wvMA,
    wvWiMA: wvWiMA,
    tmfEMA: tmf,
    tmfWiMa: tmfW
  }

  this.result = tmfW;

  this.prev.candle = candle;
  this.prev.advWiMA = advWiMA;
  this.prev.wvWiMA = wvWiMA;
  this.age++;
  return this.result;
}

module.exports = Indicator;
