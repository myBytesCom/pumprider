const WiMA = function(length) {
  this.input = 'price';
  this.length = length;
  this.result = null;
}
WiMA.prototype.update = function(price) {
  const prev = this.result || 0;
  this.result = (price + prev * (this.length - 1)) / this.length;
  return this.result;
}

const Indicator = function(length) {
  this.input = 'candle';
  length = length || 21;
  this.wma = new WiMA(length);
  this.wmv = new WiMA(length);
  this.result = null;
  this.prev = null;
  this.debug = {};
};

Indicator.prototype.update = function(candle) {
  if (!this.prev) this.prev = candle;
  const trh = Math.max(this.prev.close, candle.high);
  const trl = Math.min(this.prev.close, candle.low);
  const trc = trh - trl;

  const adv = candle.volume * ((candle.close - trl) - (trh - candle.close)) / (trc === 0 ? 9999999 : trc);
  const advMA = this.wma.update(adv);

  const wv = candle.volume;
  const wvMA = this.wmv.update(wv);

  const tmf = wvMA === 0 ? 0 : (advMA / wvMA);

  this.debug = {
    trh: trh,
    trl: trl,
    trc: trc,
    adv: adv,
    advMA: advMA,
    wv: wv,
    wvMA: wvMA,
    tmf: tmf,
  }

  this.result = tmf;
  this.prev = candle;

  return this.result;
}

module.exports = Indicator;
