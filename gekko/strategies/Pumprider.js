var _ = require('lodash');
const helper = require('./pumprider/helper.js');
const isMatch = require('lodash.ismatch');
var log = require('../core/log.js');

var method = {};
let twiggs = null;
const pattern = ['cdl2crows', 'cdl3blackcrows', 'cdl3inside', 'cdl3linestrike', 'cdl3outside', 'cdl3starsinsouth', 'cdl3whitesoldiers', 'cdlabandonedbaby', 'cdladvanceblock', 'cdlbelthold', 'cdlbreakaway', 'cdlclosingmarubozu', 'cdlconcealbabyswall', 'cdlcounterattack', 'cdldarkcloudcover', 'cdldoji', 'cdldojistar', 'cdldragonflydoji', 'cdlengulfing', 'cdleveningdojistar', 'cdleveningstar', 'cdlgapsidesidewhite', 'cdlgravestonedoji', 'cdlhammer', 'cdlhangingman', 'cdlharami', 'cdlharamicross', 'cdlhighwave', 'cdlhikkake', 'cdlhikkakemod', 'cdlhomingpigeon', 'cdlidentical3crows', 'cdlinneck', 'cdlinvertedhammer', 'cdlkicking', 'cdlkickingbylength', 'cdlladderbottom', 'cdllongleggeddoji', 'cdllongline', 'cdlmarubozu', 'cdlmatchinglow', 'cdlmathold', 'cdlmorningdojistar', 'cdlmorningstar', 'cdlonneck', 'cdlpiercing', 'cdlrickshawman', 'cdlrisefall3methods', 'cdlseparatinglines', 'cdlshootingstar', 'cdlshortline', 'cdlspinningtop', 'cdlstalledpattern', 'cdlsticksandwich', 'cdltakuri', 'cdltasukigap', 'cdlthrusting', 'cdltristar', 'cdlunique3river', 'cdlupsidegap2crows', 'cdlxsidegap3methods'];


// Initial imports and configurations
method.init = function () {
    this.consider = helper.considerations();

    var customTalibSettings = {
        optInFastPeriod: 10,
        optInSlowPeriod: 21,
        optInSignalPeriod: 9,
        optInPenetration: 3
    };


        for (i = 0; i < pattern.length; i++) {

                this.addTalibIndicator(pattern[i], pattern[i], customTalibSettings);
            console.log("Indicator loaded: " + pattern[i]);
        }



    // Doji Pattern Recognition import complete set of ta-lib pattern recognition methods
    //  this.addTalibIndicator('cdl2crows', 'cdl2crows', customTalibSettings);
    //this.addTalibIndicator('cdl3blackcrows', 'cdl3blackcrows', this.settings.parameters);
    /*    this.addTalibIndicator('cdl3inside', 'cdl3inside', this.settings.parameters);
        this.addTalibIndicator('cdl3linestrike', 'cdl3linestrike', this.settings.parameters);
        this.addTalibIndicator('cdl3outside', 'cdl3outside', this.settings.parameters);
        this.addTalibIndicator('cdl3starsinsouth', 'cdl3starsinsouth', this.settings.parameters);
        this.addTalibIndicator('cdl3whitesoldiers', 'cdl3whitesoldiers', this.settings.parameters);
        this.addTalibIndicator('cdlabandonedbaby', 'cdlabandonedbaby', this.settings.parameters);
        this.addTalibIndicator('cdladvanceblock', 'cdladvanceblock', this.settings.parameters);
        this.addTalibIndicator('cdlbelthold', 'cdlbelthold', this.settings.parameters);
        this.addTalibIndicator('cdlbreakaway', 'cdlbreakaway', this.settings.parameters);
        this.addTalibIndicator('cdlclosingmarubozu', 'cdlclosingmarubozu', this.settings.parameters);
        this.addTalibIndicator('cdlconcealbabyswall', 'cdlconcealbabyswall', this.settings.parameters);
        this.addTalibIndicator('cdlcounterattack', 'cdlcounterattack', this.settings.parameters);
        this.addTalibIndicator('cdldarkcloudcover', 'cdldarkcloudcover', this.settings.parameters);
        this.addTalibIndicator('cdldoji', 'cdldoji', this.settings.parameters);
        this.addTalibIndicator('cdldojistar', 'cdldojistar', this.settings.parameters);
        this.addTalibIndicator('cdldragonflydoji', 'cdldragonflydoji', this.settings.parameters);
        this.addTalibIndicator('cdlengulfing', 'cdlengulfing', this.settings.parameters);
        this.addTalibIndicator('cdleveningdojistar', 'cdleveningdojistar', this.settings.parameters);
        this.addTalibIndicator('cdleveningstar', 'cdleveningstar', this.settings.parameters);
        this.addTalibIndicator('cdlgapsidesidewhite', 'cdlgapsidesidewhite', this.settings.parameters);
        this.addTalibIndicator('cdlgravestonedoji', 'cdlgravestonedoji', this.settings.parameters);
        this.addTalibIndicator('cdlhammer', 'cdlhammer', this.settings.parameters);
        this.addTalibIndicator('cdlhangingman', 'cdlhangingman', this.settings.parameters);
        this.addTalibIndicator('cdlharami', 'cdlharami', this.settings.parameters);
        this.addTalibIndicator('cdlharamicross', 'cdlharamicross', this.settings.parameters);
        this.addTalibIndicator('cdlhighwave', 'cdlhighwave', this.settings.parameters);
        this.addTalibIndicator('cdlhikkake', 'cdlhikkake', this.settings.parameters);
        this.addTalibIndicator('cdlhikkakemod', 'cdlhikkakemod', this.settings.parameters);
        this.addTalibIndicator('cdlhomingpigeon', 'cdlhomingpigeon', this.settings.parameters);
        this.addTalibIndicator('cdlidentical3crows', 'cdlidentical3crows', this.settings.parameters);
        this.addTalibIndicator('cdlinneck', 'cdlinneck', this.settings.parameters);
        this.addTalibIndicator('cdlinvertedhammer', 'cdlinvertedhammer', this.settings.parameters);
        this.addTalibIndicator('cdlkicking', 'cdlkicking', this.settings.parameters);
        this.addTalibIndicator('cdlkickingbylength', 'cdlkickingbylength', this.settings.parameters);
        this.addTalibIndicator('cdlladderbottom', 'cdlladderbottom', this.settings.parameters);
        this.addTalibIndicator('cdllongleggeddoji', 'cdllongleggeddoji', this.settings.parameters);
        this.addTalibIndicator('cdllongline', 'cdllongline', this.settings.parameters);
        this.addTalibIndicator('cdlmarubozu', 'cdlmarubozu', this.settings.parameters);
        this.addTalibIndicator('cdlmatchinglow', 'cdlmatchinglow', this.settings.parameters);
        this.addTalibIndicator('cdlmathold', 'cdlmathold', this.settings.parameters);
        this.addTalibIndicator('cdlmorningdojistar', 'cdlmorningdojistar', this.settings.parameters);
        this.addTalibIndicator('cdlmorningstar', 'cdlmorningstar', this.settings.parameters);
        this.addTalibIndicator('cdlonneck', 'cdlonneck', this.settings.parameters);
        this.addTalibIndicator('cdlpiercing', 'cdlpiercing', this.settings.parameters);
        this.addTalibIndicator('cdlrickshawman', 'cdlrickshawman', this.settings.parameters);
        this.addTalibIndicator('cdlrisefall3methods', 'cdlrisefall3methods', this.settings.parameters);
        this.addTalibIndicator('cdlseparatinglines', 'cdlseparatinglines', this.settings.parameters);
        this.addTalibIndicator('cdlshootingstar', 'cdlshootingstar', this.settings.parameters);
        this.addTalibIndicator('cdlshortline', 'cdlshortline', this.settings.parameters);
        this.addTalibIndicator('cdlspinningtop', 'cdlspinningtop', this.settings.parameters);
        this.addTalibIndicator('cdlstalledpattern', 'cdlstalledpattern', this.settings.parameters);
        this.addTalibIndicator('cdlsticksandwich', 'cdlsticksandwich', this.settings.parameters);
        this.addTalibIndicator('cdltakuri', 'cdltakuri', this.settings.parameters);
        this.addTalibIndicator('cdltasukigap', 'cdltasukigap', this.settings.parameters);
        this.addTalibIndicator('cdlthrusting', 'cdlthrusting', this.settings.parameters);
        this.addTalibIndicator('cdltristar', 'cdltristar', this.settings.parameters);
        this.addTalibIndicator('cdlunique3river', 'cdlunique3river', this.settings.parameters);
        this.addTalibIndicator('cdlupsidegap2crows', 'cdlupsidegap2crows', this.settings.parameters);
        this.addTalibIndicator('cdlxsidegap3methods', 'cdlxsidegap3methods', this.settings.parameters);*/

    // Twiggs Moneyflow Indicator (uses Wilder Moving Average)
    this.addIndicator('twiggs', 'TWIGGS', this.settings);

    // Our trendobject is the place, where all the results come together. Used to create the strategy rules
    // Not yet ready
    this.trend = {
        twiggs: {
            direction: 0,  // The direction of the Twiggs Moneyflow line (up, down, right)
            value: 0,           // The computed output value of the Twiggs Moneyflow algorythm  *
            respectations: 0,   // How often is zero line nearly touched, but not crossed.      *Adjust the settings!
            duration: 0,        // Count of candles how long the trend
            persisted: false,
        },
        pattern: {
            found: [],
            character: 0,  // Might become 'bullish', 'bearish' or 'balanced'
            strenght: 0,
            duration: 0,
            persisted: false,
        },

        adviced: false
    };

    // Now add the indicators for pattern detection

    for (i = 0; i < pattern.length; i++) {
        this.addTalibIndicator(pattern[i], pattern[i], customTalibSettings);
    }

    /*
        let self = this;
        candle.pattern = [];
        for (i = 0; i < pattern.length; i++) {
            let patterndetection = new Promise(function(resolve,reject) {
                var elem = {}, result=[];
                elem.id = pattern[i];
                elem.weight = self.talibIndicators[pattern[i]].result.outInteger;
                result.push(elem);
                resolve(result);
            });

            Promise.all([patterndetection]).then(function(result) {
                console.log("The Patterns: " + JSON.stringify(result));  // [{"cdlhikkakemod":0}]
                candle.pattern.push(result);
            },function(reason) {
                console.log("Something went wrong: " + reason);
            });
        }
    */


    this.history = this.settings.historySize || this.tradingAdvisor.historySize;

    this.threshold = this.settings.parameters.thresholds;

    this.accp = this.settings.thresholds.accumulationpersistence;
    this.disp = this.settings.thresholds.distributionpersistence;
    this.uptp = this.settings.thresholds.uptrendpersistence;
    this.dotp = this.settings.thresholds.downtrendpersistence;

    // We have an array to lookup for bullish candle patterns
    this.cdlbullish = [
        'cdldojistar', 'cdlrisefall3methods'
    ];
    // And one for bearish patterns. Candles patterns can be in both
    this.cdlbearish = [
        'cdl2crows', 'cdleveningstar'
    ];
};


// What happens on every new candle?
method.update = function (candle) {
    this.indicators.twiggs.update(candle);

};
// Based on the newly calculated
// information, check if we should
// update or not.
method.check = function (candle) {
    price = candle.close;

    candle.pattern = [];
    candle.weight = 0;

    //get the moneyflow "in" / "out" / "line"  we choose twiggs moneyflow
    twiggs = this.indicators.twiggs.result;



    for (i = 0; i < pattern.length; i++) {

        var elem = {};

        elem.id = pattern[i];
        elem.weight = this.talibIndicators[pattern[i]].result.outInteger;

        if (elem.weight !== 0) {

            // we detected a candlepattern and have to consider if this is a signal

            elem.consideration = this.consider[pattern[i]]();

            // now we push the results into the actual candle object to make it available in chartview later
            candle.pattern.push(elem);
            candle.weight = candle.weight + elem.weight;


            log.info("result from consideration: " + JSON.stringify(elem.consideration));

        }


    }
  //  log.info("candle check: " + JSON.stringify(this.candle));


  //  log.info("PatternArray: " + JSON.stringify(candle.pattern));
  //  log.info("Patternweight: " + candle.weight);


    // log.info("Twiggs Moneyflow: " + JSON.stringify(twiggs));

    if (candle.weight <= -200 && twiggs.result < -0.05 && this.trend !== 'short') {
        this.trend = 'short';
        this.advice('short');

    } else if (candle.weight >= 200 && twiggs.result >= 0.05 && this.trend !== 'long') {
        this.trend = 'long';
        this.advice('long');

    }


};

method.log = function () {
    //   log.info(JSON.stringify(this.trend));
    if (twiggs > 0) twiggs = " " + twiggs.toFixed(8);
    if (twiggs < 0) twiggs = twiggs.toFixed(8);
    let trend = "⤴ ↸ ↗ ↘ → ↯ ⇡";
    log.info(`
        ╔════════════════════════════════════════════════════════════════════════════════════╗    
        ║ <>---------------------------<> Pumprider (c) 2018 <>---------------------------<> ║
        ║                                                                                    ║
        ║    Twiggs: ${twiggs}        ║                                              ║
        ║    Direction: ${trend}      ║                                              ║           
        ║    Respectations: ${false}  ║                                              ║
        ║    duration: ${false}       ║                                              ║
        ║    persisted: ${false}                 ║                                              ║
        ║    STOCH D: ${false}                   ║                                              ║
        ╚════════════════════════════════════════════════════════════════════════════════════╝
    `);

};

module.exports = method;
