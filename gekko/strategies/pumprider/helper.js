// Pattern Recognition import complete set of ta-lib pattern recognition methods
exports.considerations = function () {

  /*
  * Penetration:
  *
  * cdlabandonedbaby=0
  * CDLDARKCLOUDCOVER=0
  * CDLEVENINGDOJISTAR=0
  * CDLEVENINGSTAR=0
  * CDLMATHOLD=0
  * cdlabandonedbaby=0
  * CDLMORNINGDOJISTAR=0
  * CDLMORNINGSTAR=0
  *
  * */


  /*** Two Crows ***/
  function cdl2crows(result, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl2crows', 'cdl2crows', customTalibSettings);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white candle
     * - second candle: black real body
     * - gap between the first and the second candle's real bodies
     * - third candle: black candle that opens within the second real body and closes within the first real body
     * The meaning of "long" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): two crows is always bearish;
     * the user should consider that two crows is significant when it appears in an uptrend, while this function
     * does not consider the trend
     */

    /**line2*/

    if (trend="up") {

      return {
        id: "cdl2crows",
        name: "Two Crows",
        character: "bearish",
        appears: "uptrend",
        patternlength: 3,
        confirmation: "last_close",
        stop_loss: "last_high",
        sell_level: "last_close"
      }
    } else {

      return false;
    }
    /**line3*/
  };

  /***
   *
   * Three Black Crows
   *
   * ***/

  function cdl3blackcrows(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl3blackcrows', 'cdl3blackcrows', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three consecutive and declining black candlesticks
     * - each candle must have no or very short lower shadow
     * - each candle after the first must open within the prior candle's real body
     * - the first candle's close should be under the prior white candle's high
     * The meaning of "very short" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): three black crows is always bearish;
     * the user should consider that 3 black crows is significant when it appears after a mature advance or at high levels,
     * while this function does not consider it
     */


    /**line2*/

    return {
      id: "cdl3blackcrows",
      name: "Three Black Crows",
      character: "bearish",
      appears: "mature_advance || high_level",
      patternlength: 3,
      stop_loss: "last_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   * Three Inside Up/Down
   *
   * ***/

  function cdl3inside(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl3inside', 'cdl3inside', this.settings.parameters);

    /**line1*/ console.log('function found');

//id:’cdl3inside’, name’Bullish Three Inside Up’, appears: ’downtrend’, length: 3, stop_loss: last_low, buy_level: "last_high"
//id:’cdl3inside’, name’Bearish Three Inside Down’, appears: ’uptrend’, length: 3, stop_loss: "last_high", sell_level: "last_close"
    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three consecutive and declining black candlesticks
     * - each candle must have no or very short lower shadow
     * - each candle after the first must open within the prior candle's real body
     * - the first candle's close should be under the prior white candle's high
     * The meaning of "very short" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): three black crows is always bearish;
     * the user should consider that 3 black crows is significant when it appears after a mature advance or at high levels,
     * while this function does not consider it
     */

    if (trend === "up" || pricelevel === "high") {

      return {
        id: "cdl3inside",
        name: "Three Inside Up/Down",
        character: "bearish",
        appears: "downtrend",
        patternlength: 3,
        stop_loss: "second_high",
        sell_level: "last_close"
      }

    } else {

      return "false";
    }

    /**line3*/

  };

  /***
   *
   * Three-Line Strike
   *
   * ***/

  function cdl3linestrike(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl3linestrike', 'cdl3linestrike', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three white soldiers (three black crows): three white (black) candlesticks with consecutively higher (lower) closes,
     * each opening within or near the previous real body
     * - fourth candle: black (white) candle that opens above (below) prior candle's close and closes below (above)
     * the first candle's open
     * The meaning of "near" is specified with TA_SetCandleSettings;
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * the user should consider that 3-line strike is significant when it appears in a trend in the same direction of
     * the first three candles, while this function does not consider it
     */


    return {
      id: "cdl3linestrike",
      name: "Three-Line Strike",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   * Three Outside Up/Down
   *
   * ***/

  function cdl3outside(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl3outside', 'cdl3outside', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first: black (white) real body
     * - second: white (black) real body that engulfs the prior real body
     * - third: candle that closes higher (lower) than the second candle
     * outInteger is positive (1 to 100) for the three outside up or negative (-1 to -100) for the three outside down;
     * the user should consider that a three outside up must appear in a downtrend and three outside down must appear
     * in an uptrend, while this function does not consider it
     */
    return {
      id: "cdl3outside",
      name: "Three Outside Up/Down",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   * Three Stars In The South
   *
   * ***/

  function cdl3starsinsouth(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl3starsinsouth', 'cdl3starsinsouth', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle with long lower shadow
     * - second candle: smaller black candle that opens higher than prior close but within prior candle's range
     *   and trades lower than prior close but not lower than prior low and closes off of its low (it has a shadow)
     * - third candle: small black marubozu (or candle with very short shadows) engulfed by prior candle's range
     * The meanings of "long body", "short body", "very short shadow" are specified with TA_SetCandleSettings;
     * outInteger is positive (1 to 100): 3 stars in the south is always bullish;
     * the user should consider that 3 stars in the south is significant when it appears in downtrend, while this function
     * does not consider it
     */
    return {
      id: "cdl3starsinsouth",
      name: "Three Stars In The South",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   * Three Advancing White Soldiers
   *
   * ***/

  function cdl3whitesoldiers(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdl3whitesoldiers', 'cdl3whitesoldiers', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three white candlesticks with consecutively higher closes
     * - Greg Morris wants them to be long, Steve Nison doesn't; anyway they should not be short
     * - each candle opens within or near the previous white real body
     * - each candle must have no or very short upper shadow
     * - to differentiate this pattern from advance block, each candle must not be far shorter than the prior candle
     * The meanings of "not short", "very short shadow", "far" and "near" are specified with TA_SetCandleSettings;
     * here the 3 candles must be not short, if you want them to be long use TA_SetCandleSettings on BodyShort;
     * outInteger is positive (1 to 100): advancing 3 white soldiers is always bullish;
     * the user should consider that 3 white soldiers is significant when it appears in downtrend, while this function
     * does not consider it
     */
    return {
      id: "cdl3whitesoldiers",
      name: "Three Advancing White Soldiers",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   * Abandoned Baby
   *
   * ***/

  function cdlabandonedbaby(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlabandonedbaby', 'cdlabandonedbaby', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white (black) real body
     * - second candle: doji
     * - third candle: black (white) real body that moves well within the first candle's real body
     * - upside (downside) gap between the first candle and the doji (the shadows of the two candles don't touch)
     * - downside (upside) gap between the doji and the third candle (the shadows of the two candles don't touch)
     * The meaning of "doji" and "long" is specified with TA_SetCandleSettings
     * The meaning of "moves well within" is specified with optInPenetration and "moves" should mean the real body should
     * not be short ("short" is specified with TA_SetCandleSettings) - Greg Morris wants it to be long, someone else want
     * it to be relatively long
     * outInteger is positive (1 to 100) when it's an abandoned baby bottom or negative (-1 to -100) when it's
     * an abandoned baby top; the user should consider that an abandoned baby is significant when it appears in
     * an uptrend or downtrend, while this function does not consider the trend
     */
    return {
      id: "cdlabandonedbaby",
      name: "Abandoned Baby",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  }

  /***
   *
   *  Advance Block
   *
   *  ***/

  function cdladvanceblock(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdladvanceblock', 'cdladvanceblock', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three white candlesticks with consecutively higher closes
     * - each candle opens within or near the previous white real body
     * - first candle: long white with no or very short upper shadow (a short shadow is accepted too for more flexibility)
     * - second and third candles, or only third candle, show signs of weakening: progressively smaller white real bodies
     * and/or relatively long upper shadows; see below for specific conditions
     * The meanings of "long body", "short shadow", "far" and "near" are specified with TA_SetCandleSettings;
     * outInteger is negative (-1 to -100): advance block is always bearish;
     * the user should consider that advance block is significant when it appears in uptrend, while this function
     * does not consider it
     */
    return {
      id: "cdladvanceblock",
      name: "Advance Block",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Belt-hold
   *
   *  ***/

  function cdlbelthold(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlbelthold', 'cdlbelthold', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - long white (black) real body
     * - no or very short lower (upper) shadow
     * The meaning of "long" and "very short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white (bullish), negative (-1 to -100) when black (bearish)
     */
    return {
      id: "cdlbelthold",
      name: "Belt-hold",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Breakaway
   *
   *  ***/

  function cdlbreakaway(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlbreakaway', 'cdlbreakaway', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black (white)
     * - second candle: black (white) day whose body gaps down (up)
     * - third candle: black or white day with lower (higher) high and lower (higher) low than prior candle's
     * - fourth candle: black (white) day with lower (higher) high and lower (higher) low than prior candle's
     * - fifth candle: white (black) day that closes inside the gap, erasing the prior 3 days
     * The meaning of "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * the user should consider that breakaway is significant in a trend opposite to the last candle, while this
     * function does not consider it
     */
    return {
      id: "cdlbreakaway",
      name: "Breakaway",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Closing Marubozu
   *
   *  ***/

  function cdlclosingmarubozu(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlclosingmarubozu', 'cdlclosingmarubozu', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - long white (black) real body
     * - no or very short upper (lower) shadow
     * The meaning of "long" and "very short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white (bullish), negative (-1 to -100) when black (bearish)
     */
    return {
      id: "cdlclosingmarubozu",
      name: "Closing Marubozu",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Concealing Baby Swallow
   *
   *  ***/

  function cdlconcealbabyswall(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlconcealbabyswall', 'cdlconcealbabyswall', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: black marubozu (very short shadows)
     * - second candle: black marubozu (very short shadows)
     * - third candle: black candle that opens gapping down but has an upper shadow that extends into the prior body
     * - fourth candle: black candle that completely engulfs the third candle, including the shadows
     * The meanings of "very short shadow" are specified with TA_SetCandleSettings;
     * outInteger is positive (1 to 100): concealing baby swallow is always bullish;
     * the user should consider that concealing baby swallow is significant when it appears in downtrend, while
     * this function does not consider it
     */
    return {
      id: "cdlconcealbabyswall",
      name: "Concealing Baby Swallow",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Counterattack
   *
   *  ***/

  function cdlcounterattack(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlcounterattack', 'cdlcounterattack', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black (white)
     * - second candle: long white (black) with close equal to the prior close
     * The meaning of "equal" and "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * the user should consider that counterattack is significant in a trend, while this function does not consider it
     */
    return {
      id: "cdlcounterattack",
      name: "Counterattack",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Dark Cloud Cover
   *
   *  ***/

  function cdldarkcloudcover(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdldarkcloudcover', 'cdldarkcloudcover', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white candle
     * - second candle: black candle that opens above previous day high and closes within previous day real body;
     * Greg Morris wants the close to be below the midpoint of the previous real body
     * The meaning of "long" is specified with TA_SetCandleSettings, the penetration of the first real body is specified
     * with optInPenetration
     * outInteger is negative (-1 to -100): dark cloud cover is always bearish
     * the user should consider that a dark cloud cover is significant when it appears in an uptrend, while
     * this function does not consider it
     */
    return {
      id: "cdldarkcloudcover",
      name: "Dark Cloud Cover",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Doji
   *
   *  ***/

  function cdldoji(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdldoji', 'cdldoji', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     *
     * Must have:
     * - open quite equal to close
     * How much can be the maximum distance between open and close is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100) but this does not mean it is bullish: doji shows uncertainty and it is
     * neither bullish nor bearish when considered alone
     */
    return {
      id: "cdldoji",
      name: "Doji",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Doji Star
   *
   *  ***/

  function cdldojistar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdldojistar', 'cdldojistar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long real body
     * - second candle: star (open gapping up in an uptrend or down in a downtrend) with a doji
     * The meaning of "doji" and "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * it's defined bullish when the long candle is white and the star gaps up, bearish when the long candle
     * is black and the star gaps down; the user should consider that a doji star is bullish when it appears
     * in an uptrend and it's bearish when it appears in a downtrend, so to determine the bullishness or
     * bearishness of the pattern the trend must be analyzed
     */
    return {
      id: "cdldojistar",
      name: "Doji Star",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Dragonfly Doji
   *
   *  ***/

  function cdldragonflydoji(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdldragonflydoji', 'cdldragonflydoji', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     *
     * Must have:
     * - doji body
     * - open and close at the high of the day = no or very short upper shadow
     * - lower shadow (to distinguish from other dojis, here lower shadow should not be very short)
     * The meaning of "doji" and "very short" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100) but this does not mean it is bullish: dragonfly doji must be considered
     * relatively to the trend
     */
    return {
      id: "cdldragonflydoji",
      name: "Dragonfly Doji",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Engulfing Pattern
   *
   *  ***/

  function cdlengulfing(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlengulfing', 'cdlengulfing', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first: black (white) real body
     * - second: white (black) real body that engulfs the prior real body
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish:
     * - 100 is returned when the second candle's real body begins before and ends after the first candle's real body
     * - 80 is returned when the two real bodies match on one end (Greg Morris contemplate this case in his book
     *   "Candlestick charting explained")
     * The user should consider that an engulfing must appear in a downtrend if bullish or in an uptrend if bearish,
     * while this function does not consider it
     */
    return {
      id: "cdlengulfing",
      name: "Engulfing Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Evening Doji Star
   *
   *  ***/

  function cdleveningdojistar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdleveningdojistar', 'cdleveningdojistar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white real body
     * - second candle: doji gapping up
     * - third candle: black real body that moves well within the first candle's real body
     * The meaning of "doji" and "long" is specified with TA_SetCandleSettings
     * The meaning of "moves well within" is specified with optInPenetration and "moves" should mean the real body should
     * not be short ("short" is specified with TA_SetCandleSettings) - Greg Morris wants it to be long, someone else want
     * it to be relatively long
     * outInteger is negative (-1 to -100): evening star is always bearish;
     * the user should consider that an evening star is significant when it appears in an uptrend,
     * while this function does not consider the trend
     */
    return {
      id: "cdleveningdojistar",
      name: "Evening Doji Star",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Evening Star
   *
   *  ***/

  function cdleveningstar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdleveningstar', 'cdleveningstar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white real body
     * - second candle: doji gapping up
     * - third candle: black real body that moves well within the first candle's real body
     * The meaning of "doji" and "long" is specified with TA_SetCandleSettings
     * The meaning of "moves well within" is specified with optInPenetration and "moves" should mean the real body should
     * not be short ("short" is specified with TA_SetCandleSettings) - Greg Morris wants it to be long, someone else want
     * it to be relatively long
     * outInteger is negative (-1 to -100): evening star is always bearish;
     * the user should consider that an evening star is significant when it appears in an uptrend,
     * while this function does not consider the trend
     */
    return {
      id: "cdleveningstar",
      name: "Evening Star",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Up/Down-gap side-by-side white lines
   *
   *  ***/

  function cdlgapsidesidewhite(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlgapsidesidewhite', 'cdlgapsidesidewhite', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - upside or downside gap (between the bodies)
     * - first candle after the window: white candlestick
     * - second candle after the window: white candlestick with similar size (near the same) and about the same
     *   open (equal) of the previous candle
     * - the second candle does not close the window
     * The meaning of "near" and "equal" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) or negative (-1 to -100): the user should consider that upside
     * or downside gap side-by-side white lines is significant when it appears in a trend, while this function
     * does not consider the trend
     */
    return {
      id: "cdlgapsidesidewhite",
      name: "Up/Down-gap side-by-side white lines",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Gravestone Doji
   *
   *  ***/

  function cdlgravestonedoji(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlgravestonedoji', 'cdlgravestonedoji', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     *
     * Must have:
     * - doji body
     * - open and close at the low of the day = no or very short lower shadow
     * - upper shadow (to distinguish from other dojis, here upper shadow should not be very short)
     * The meaning of "doji" and "very short" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100) but this does not mean it is bullish: gravestone doji must be considered
     * relatively to the trend
     */
    return {
      id: "cdlgravestonedoji",
      name: "Gravestone Doji",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Hammer
   *
   *  ***/

  function cdlhammer(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlhammer', 'cdlhammer', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - small real body
     * - long lower shadow
     * - no, or very short, upper shadow
     * - body below or near the lows of the previous candle
     * The meaning of "short", "long" and "near the lows" is specified with TA_SetCandleSettings;
     * outInteger is positive (1 to 100): hammer is always bullish;
     * the user should consider that a hammer must appear in a downtrend, while this function does not consider it
     */
    return {
      id: "cdlhammer",
      name: "Hammer",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Hanging Man
   *
   *  ***/

  function cdlhangingman(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlhangingman', 'cdlhangingman', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - small real body
     * - long lower shadow
     * - no, or very short, upper shadow
     * - body above or near the highs of the previous candle
     * The meaning of "short", "long" and "near the highs" is specified with TA_SetCandleSettings;
     * outInteger is negative (-1 to -100): hanging man is always bearish;
     * the user should consider that a hanging man must appear in an uptrend, while this function does not consider it
     */
    return {
      id: "cdlhangingman",
      name: "Hanging Man",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Harami Pattern
   *
   *  ***/

  function cdlharami(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlharami', 'cdlharami', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white (black) real body
     * - second candle: short real body totally engulfed by the first
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish:
     * - 100 is returned when the first candle's real body begins before and ends after the second candle's real body
     * - 80 is returned when the two real bodies match on one end (Greg Morris contemplate this case in his book
     *   "Candlestick charting explained")
     * The user should consider that a harami is significant when it appears in a downtrend if bullish or
     * in an uptrend when bearish, while this function does not consider the trend
     */
    return {
      id: "cdlharami",
      name: "Harami Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Harami Cross Pattern
   *
   *  ***/

  function cdlharamicross(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlharamicross', 'cdlharamicross', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white (black) real body
     * - second candle: doji totally engulfed by the first
     * The meaning of "doji" and "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * the user should consider that a harami cross is significant when it appears in a downtrend if bullish or
     * in an uptrend when bearish, while this function does not consider the trend
     */
    return {
      id: "cdlharamicross",
      name: "Harami Cross Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  High-Wave Candle
   *
   *  ***/

  function cdlhighwave(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlhighwave', 'cdlhighwave', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - short real body
     * - very long upper and lower shadow
     * The meaning of "short" and "very long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white or negative (-1 to -100) when black;
     * it does not mean bullish or bearish
     */
    return {
      id: "cdlhighwave",
      name: "High-Wave Candle",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Hikkake Pattern
   *
   *  ***/

  function cdlhikkake(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlhikkake', 'cdlhikkake', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first and second candle: inside bar (2nd has lower high and higher low than 1st)
     * - third candle: lower high and lower low than 2nd (higher high and higher low than 2nd)
     * outInteger[hikkakebar] is positive (1 to 100) or negative (-1 to -100) meaning bullish or bearish hikkake
     * Confirmation could come in the next 3 days with:
     * - a day that closes higher than the high (lower than the low) of the 2nd candle
     * outInteger[confirmationbar] is equal to 100 + the bullish hikkake result or -100 - the bearish hikkake result
     * Note: if confirmation and a new hikkake come at the same bar, only the new hikkake is reported (the new hikkake
     * overwrites the confirmation of the old hikkake)
     */
    return {
      id: "cdlhikkake",
      name: "Hikkake Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Modified Hikkake Pattern
   *
   *  ***/

  function cdlhikkakemod(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlhikkakemod', 'cdlhikkakemod', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle
     * - second candle: candle with range less than first candle and close near the bottom (near the top)
     * - third candle: lower high and higher low than 2nd
     * - fourth candle: lower high and lower low (higher high and higher low) than 3rd
     * outInteger[hikkake bar] is positive (1 to 100) or negative (-1 to -100) meaning bullish or bearish hikkake
     * Confirmation could come in the next 3 days with:
     * - a day that closes higher than the high (lower than the low) of the 3rd candle
     * outInteger[confirmationbar] is equal to 100 + the bullish hikkake result or -100 - the bearish hikkake result
     * Note: if confirmation and a new hikkake come at the same bar, only the new hikkake is reported (the new hikkake
     * overwrites the confirmation of the old hikkake);
     * the user should consider that modified hikkake is a reversal pattern, while hikkake could be both a reversal
     * or a continuation pattern, so bullish (bearish) modified hikkake is significant when appearing in a downtrend
     * (uptrend)
     */
    return {
      id: "cdlhikkakemod",
      name: "Modified Hikkake Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Homing Pigeon
   *
   *  ***/

  function cdlhomingpigeon(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlhomingpigeon', 'cdlhomingpigeon', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle
     * - second candle: short black real body completely inside the previous day's body
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100): homing pigeon is always bullish;
     * the user should consider that homing pigeon is significant when it appears in a downtrend,
     * while this function does not consider the trend
     */
    return {
      id: "cdlhomingpigeon",
      name: "Homing Pigeon",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Identical Three Crows
   *
   *  ***/

  function cdlidentical3crows(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlidentical3crows', 'cdlidentical3crows', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three consecutive and declining black candlesticks
     * - each candle must have no or very short lower shadow
     * - each candle after the first must open at or very close to the prior candle's close
     * The meaning of "very short" is specified with TA_SetCandleSettings;
     * the meaning of "very close" is specified with TA_SetCandleSettings (Equal);
     * outInteger is negative (-1 to -100): identical three crows is always bearish;
     * the user should consider that identical 3 crows is significant when it appears after a mature advance or at high levels,
     * while this function does not consider it
     */
    return {
      id: "cdlidentical3crows",
      name: "Identical Three Crows",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  In-Neck Pattern
   *
   *  ***/

  function cdlinneck(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlinneck', 'cdlinneck', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle
     * - second candle: white candle with open below previous day low and close slightly into previous day body
     * The meaning of "equal" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): in-neck is always bearish
     * the user should consider that in-neck is significant when it appears in a downtrend, while this function
     * does not consider it
     */
    return {
      id: "cdlinneck",
      name: "In-Neck Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Inverted Hammer
   *
   *  ***/

  function cdlinvertedhammer(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlinvertedhammer', 'cdlinvertedhammer', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
    * Must have:
    * - small real body
    * - long upper shadow
    * - no, or very short, lower shadow
    * - gap down
    * The meaning of "short", "very short" and "long" is specified with TA_SetCandleSettings;
    * outInteger is positive (1 to 100): inverted hammer is always bullish;
    * the user should consider that an inverted hammer must appear in a downtrend, while this function does not consider it
    */
    return {
      id: "cdlinvertedhammer",
      name: "Inverted Hammer",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Kicking
   *
   *  ***/

  function cdlkicking(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlkicking', 'cdlkicking', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: marubozu
     * - second candle: opposite color marubozu
     * - gap between the two candles: upside gap if black then white, downside gap if white then black
     * The meaning of "long body" and "very short shadow" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish
     */
    return {
      id: "cdlkicking",
      name: "Kicking",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Kicking - bull/bear determined by the longer marubozu
   *
   *  ***/

  function cdlkickingbylength(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlkickingbylength', 'cdlkickingbylength', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: marubozu
     * - second candle: opposite color marubozu
     * - gap between the two candles: upside gap if black then white, downside gap if white then black
     * The meaning of "long body" and "very short shadow" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish; the longer of the two
     * marubozu determines the bullishness or bearishness of this pattern
     */
    return {
      id: "cdlkickingbylength",
      name: "Kicking - bull/bear determined by the longer marubozu",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Ladder Bottom
   *
   *  ***/

  function cdlladderbottom(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlladderbottom', 'cdlladderbottom', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three black candlesticks with consecutively lower opens and closes
     * - fourth candle: black candle with an upper shadow (it's supposed to be not very short)
     * - fifth candle: white candle that opens above prior candle's body and closes above prior candle's high
     * The meaning of "very short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100): ladder bottom is always bullish;
     * the user should consider that ladder bottom is significant when it appears in a downtrend,
     * while this function does not consider it
     */
    return {
      id: "cdlladderbottom",
      name: "Ladder Bottom",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Long Legged Doji
   *
   *  ***/

  function cdllongleggeddoji(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdllongleggeddoji', 'cdllongleggeddoji', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     *
     * Must have:
     * - doji body
     * - one or two long shadows
     * The meaning of "doji" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100) but this does not mean it is bullish: long legged doji shows uncertainty
     */
    return {
      id: "cdllongleggeddoji",
      name: "Long Legged Doji",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Long Line Candle
   *
   *  ***/

  function cdllongline(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdllongline', 'cdllongline', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - long real body
     * - short upper and lower shadow
     * The meaning of "long" and "short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white (bullish), negative (-1 to -100) when black (bearish)
     */
    return {
      id: "cdllongline",
      name: "Long Line Candle",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Marubozu
   *
   *  ***/

  function cdlmarubozu(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlmarubozu', 'cdlmarubozu', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - long real body
     * - no or very short upper and lower shadow
     * The meaning of "long" and "very short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white (bullish), negative (-1 to -100) when black (bearish)
     */
    return {
      id: "cdlmarubozu",
      name: "Marubozu",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Matching Low
   *
   *  ***/

  function cdlmatchinglow(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlmatchinglow', 'cdlmatchinglow', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: black candle
     * - second candle: black candle with the close equal to the previous close
     * The meaning of "equal" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100): matching low is always bullish;
     */
    return {
      id: "cdlmatchinglow",
      name: "Matching Low",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Mat Hold
   *
   *  ***/

  function cdlmathold(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlmathold', 'cdlmathold', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white candle
     * - upside gap between the first and the second bodies
     * - second candle: small black candle
     * - third and fourth candles: falling small real body candlesticks (commonly black) that hold within the long
     *   white candle's body and are higher than the reaction days of the rising three methods
     * - fifth candle: white candle that opens above the previous small candle's close and closes higher than the
     *   high of the highest reaction day
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings;
     * "hold within" means "a part of the real body must be within";
     * optInPenetration is the maximum percentage of the first white body the reaction days can penetrate (it is
     * to specify how much the reaction days should be "higher than the reaction days of the rising three methods")
     * outInteger is positive (1 to 100): mat hold is always bullish
     */
    return {
      id: "cdlmathold",
      name: "Mat Hold",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Morning Doji Star
   *
   *  ***/

  function cdlmorningdojistar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlmorningdojistar', 'cdlmorningdojistar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black real body
     * - second candle: doji gapping down
     * - third candle: white real body that moves well within the first candle's real body
     * The meaning of "doji" and "long" is specified with TA_SetCandleSettings
     * The meaning of "moves well within" is specified with optInPenetration and "moves" should mean the real body should
     * not be short ("short" is specified with TA_SetCandleSettings) - Greg Morris wants it to be long, someone else want
     * it to be relatively long
     * outInteger is positive (1 to 100): morning doji star is always bullish;
     * the user should consider that a morning star is significant when it appears in a downtrend,
     * while this function does not consider the trend
     */
    return {
      id: "cdlmorningdojistar",
      name: "Morning Doji Star",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Morning Star
   *
   *  ***/

  function cdlmorningstar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlmorningstar', 'cdlmorningstar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black real body
     * - second candle: star (Short real body gapping down)
     * - third candle: white real body that moves well within the first candle's real body
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings
     * The meaning of "moves well within" is specified with optInPenetration and "moves" should mean the real body should
     * not be short ("short" is specified with TA_SetCandleSettings) - Greg Morris wants it to be long, someone else want
     * it to be relatively long
     * outInteger is positive (1 to 100): morning star is always bullish;
     * the user should consider that a morning star is significant when it appears in a downtrend,
     * while this function does not consider the trend
     */
    return {
      id: "cdlmorningstar",
      name: "Morning Star",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  On-Neck Pattern
   *
   *  ***/

  function cdlonneck(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlonneck', 'cdlonneck', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle
     * - second candle: white candle with open below previous day low and close equal to previous day low
     * The meaning of "equal" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): on-neck is always bearish
     * the user should consider that on-neck is significant when it appears in a downtrend, while this function
     * does not consider it
     */
    return {
      id: "cdlonneck",
      name: "On-Neck Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Piercing Pattern
   *
   *  ***/

  function cdlpiercing(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlpiercing', 'cdlpiercing', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle
     * - second candle: long white candle with open below previous day low and close at least at 50% of previous day
     * real body
     * The meaning of "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100): piercing pattern is always bullish
     * the user should consider that a piercing pattern is significant when it appears in a downtrend, while
     * this function does not consider it
     */
    return {
      id: "cdlpiercing",
      name: "Piercing Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Rickshaw Man
   *
   *  ***/

  function cdlrickshawman(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlrickshawman', 'cdlrickshawman', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     *
     * Must have:
     * - doji body
     * - two long shadows
     * - body near the midpoint of the high-low range
     * The meaning of "doji" and "near" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100) but this does not mean it is bullish: rickshaw man shows uncertainty
     */
    return {
      id: "cdlrickshawman",
      name: "Rickshaw Man",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Rising/Falling Three Methods
   *
   *  ***/

  function cdlrisefall3methods(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlrisefall3methods', 'cdlrisefall3methods', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long white (black) candlestick
     * - then: group of falling (rising) small real body candlesticks (commonly black (white)) that hold within
     *   the prior long candle's range: ideally they should be three but two or more than three are ok too
     * - final candle: long white (black) candle that opens above (below) the previous small candle's close
     *   and closes above (below) the first long candle's close
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings; here only patterns with 3 small candles
     * are considered;
     * outInteger is positive (1 to 100) or negative (-1 to -100)
     */
    return {
      id: "cdlrisefall3methods",
      name: "Rising/Falling Three Methods",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Separating Lines
   *
   *  ***/

  function cdlseparatinglines(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlseparatinglines', 'cdlseparatinglines', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: black (white) candle
     * - second candle: bullish (bearish) belt hold with the same open as the prior candle
     * The meaning of "long body" and "very short shadow" of the belt hold is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * the user should consider that separating lines is significant when coming in a trend and the belt hold has
     * the same direction of the trend, while this function does not consider it
     */
    return {
      id: "cdlseparatinglines",
      name: "Separating Lines",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Shooting Star
   *
   *  ***/

  function cdlshootingstar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlshootingstar', 'cdlshootingstar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - small real body
     * - long upper shadow
     * - no, or very short, lower shadow
     * - gap up from prior real body
     * The meaning of "short", "very short" and "long" is specified with TA_SetCandleSettings;
     * outInteger is negative (-1 to -100): shooting star is always bearish;
     * the user should consider that a shooting star must appear in an uptrend, while this function does not consider it
     */
    return {
      id: "cdlshootingstar",
      name: "Shooting Star",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Short Line Candle
   *
   *  ***/

  function cdlshortline(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlshortline', 'cdlshortline', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - short real body
     * - short upper and lower shadow
     * The meaning of "short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white, negative (-1 to -100) when black;
     * it does not mean bullish or bearish
     */
    return {
      id: "cdlshortline",
      name: "Short Line Candle",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Spinning Top
   *
   *  ***/

  function cdlspinningtop(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlspinningtop', 'cdlspinningtop', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - small real body
     * - shadows longer than the real body
     * The meaning of "short" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when white or negative (-1 to -100) when black;
     * it does not mean bullish or bearish
     */
    return {
      id: "cdlspinningtop",
      name: "Spinning Top",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Stalled Pattern
   *
   *  ***/

  function cdlstalledpattern(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlstalledpattern', 'cdlstalledpattern', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - three white candlesticks with consecutively higher closes
     * - first candle: long white
     * - second candle: long white with no or very short upper shadow opening within or near the previous white real body
     * and closing higher than the prior candle
     * - third candle: small white that gaps away or "rides on the shoulder" of the prior long real body (= it's at
     * the upper end of the prior real body)
     * The meanings of "long", "very short", "short", "near" are specified with TA_SetCandleSettings;
     * outInteger is negative (-1 to -100): stalled pattern is always bearish;
     * the user should consider that stalled pattern is significant when it appears in uptrend, while this function
     * does not consider it
     */
    return {
      id: "cdlstalledpattern",
      name: "Stalled Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Stick Sandwich
   *
   *  ***/

  function cdlsticksandwich(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlsticksandwich', 'cdlsticksandwich', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: black candle
     * - second candle: white candle that trades only above the prior close (low > prior close)
     * - third candle: black candle with the close equal to the first candle's close
     * The meaning of "equal" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100): stick sandwich is always bullish;
     * the user should consider that stick sandwich is significant when coming in a downtrend,
     * while this function does not consider it
     */
    return {
      id: "cdlsticksandwich",
      name: "Stick Sandwich",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Takuri (Dragonfly Doji with very long lower shadow)
   *
   *  ***/

  function cdltakuri(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdltakuri', 'cdltakuri', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     *
     * Must have:
     * - doji body
     * - open and close at the high of the day = no or very short upper shadow
     * - very long lower shadow
     * The meaning of "doji", "very short" and "very long" is specified with TA_SetCandleSettings
     * outInteger is always positive (1 to 100) but this does not mean it is bullish: takuri must be considered
     * relatively to the trend
     */
    return {
      id: "cdltakuri",
      name: "Takuri (Dragonfly Doji with very long lower shadow)",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Tasuki Gap
   *
   *  ***/

  function cdltasukigap(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdltasukigap', 'cdltasukigap', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - upside (downside) gap
     * - first candle after the window: white (black) candlestick
     * - second candle: black (white) candlestick that opens within the previous real body and closes under (above)
     *   the previous real body inside the gap
     * - the size of two real bodies should be near the same
     * The meaning of "near" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
     * the user should consider that tasuki gap is significant when it appears in a trend, while this function does
     * not consider it
     */
    return {
      id: "cdltasukigap",
      name: "Tasuki Gap",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Thrusting Pattern
   *
   *  ***/

  function cdlthrusting(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlthrusting', 'cdlthrusting', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle
     * - second candle: white candle with open below previous day low and close into previous day body under the midpoint;
     * to differentiate it from in-neck the close should not be equal to the black candle's close
     * The meaning of "equal" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): thrusting pattern is always bearish
     * the user should consider that the thrusting pattern is significant when it appears in a downtrend and it could be
     * even bullish "when coming in an uptrend or occurring twice within several days" (Steve Nison says), while this
     * function does not consider the trend
     */
    return {
      id: "cdlthrusting",
      name: "Thrusting Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Tristar Pattern
   *
   *  ***/

  function cdltristar(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdltristar', 'cdltristar', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - 3 consecutive doji days
     * - the second doji is a star
     * The meaning of "doji" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish
     */
    return {
      id: "cdltristar",
      name: "Tristar Pattern",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Unique 3 River
   *
   *  ***/

  function cdlunique3river(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlunique3river', 'cdlunique3river', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: long black candle
     * - second candle: black harami candle with a lower low than the first candle's low
     * - third candle: small white candle with open not lower than the second candle's low, better if its open and
     *   close are under the second candle's close
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings
     * outInteger is positive (1 to 100): unique 3 river is always bullish and should appear in a downtrend
     * to be significant, while this function does not consider the trend
     */
    return {
      id: "cdlunique3river",
      name: "Unique 3 River",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Upside Gap Two Crows
   *
   *  ***/

  function cdlupsidegap2crows(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlupsidegap2crows', 'cdlupsidegap2crows', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
     * Must have:
     * - first candle: white candle, usually long
     * - second candle: small black real body
     * - gap between the first and the second candle's real bodies
     * - third candle: black candle with a real body that engulfs the preceding candle
     *   and closes above the white candle's close
     * The meaning of "short" and "long" is specified with TA_SetCandleSettings
     * outInteger is negative (-1 to -100): upside gap two crows is always bearish;
     * the user should consider that an upside gap two crows is significant when it appears in an uptrend,
     * while this function does not consider the trend
     */
    return {
      id: "cdlupsidegap2crows",
      name: "Upside Gap Two Crows",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };

  /***
   *
   *  Upside/Downside Gap Three Methods
   *
   *  ***/

  function cdlxsidegap3methods(pattern, trend, pricelevel, moneyflow) {
    //this.addTalibIndicator('cdlxsidegap3methods', 'cdlxsidegap3methods', this.settings.parameters);

    /**line1*/ console.log('function found');

    /* Proceed with the calculation for the requested range.
    * Must have:
    * - first candle: white (black) candle
    * - second candle: white (black) candle
    * - upside (downside) gap between the first and the second real bodies
    * - third candle: black (white) candle that opens within the second real body and closes within the first real body
    * outInteger is positive (1 to 100) when bullish or negative (-1 to -100) when bearish;
    * the user should consider that up/downside gap 3 methods is significant when it appears in a trend, while this
    * function does not consider it
    */
    return {
      id: "cdlxsidegap3methods",
      name: "Upside/Downside Gap Three Methods",
      character: "bearish",
      appears: "uptrend",
      patternlength: 3,
      stop_loss: "second_high",
      sell_level: "last_close"
    }

    /**line3*/

  };


  return {
    cdl2crows: cdl2crows,
    cdl3blackcrows: cdl3blackcrows,
    cdl3inside: cdl3inside,
    cdl3linestrike: cdl3linestrike,
    cdl3outside: cdl3outside,
    cdl3starsinsouth: cdl3starsinsouth,
    cdl3whitesoldiers: cdl3whitesoldiers,
    cdlabandonedbaby: cdlabandonedbaby,
    cdladvanceblock: cdladvanceblock,
    cdlbelthold: cdlbelthold,
    cdlbreakaway: cdlbreakaway,
    cdlclosingmarubozu: cdlclosingmarubozu,
    cdlconcealbabyswall: cdlconcealbabyswall,
    cdlcounterattack: cdlcounterattack,
    cdldarkcloudcover: cdldarkcloudcover,
    cdldoji: cdldoji,
    cdldojistar: cdldojistar,
    cdldragonflydoji: cdldragonflydoji,
    cdlengulfing: cdlengulfing,
    cdleveningdojistar: cdleveningdojistar,
    cdleveningstar: cdleveningstar,
    cdlgapsidesidewhite: cdlgapsidesidewhite,
    cdlgravestonedoji: cdlgravestonedoji,
    cdlhammer: cdlhammer,
    cdlhangingman: cdlhangingman,
    cdlharami: cdlharami,
    cdlharamicross: cdlharamicross,
    cdlhighwave: cdlhighwave,
    cdlhikkake: cdlhikkake,
    cdlhikkakemod: cdlhikkakemod,
    cdlhomingpigeon: cdlhomingpigeon,
    cdlidentical3crows: cdlidentical3crows,
    cdlinneck: cdlinneck,
    cdlinvertedhammer: cdlinvertedhammer,
    cdlkicking: cdlkicking,
    cdlkickingbylength: cdlkickingbylength,
    cdlladderbottom: cdlladderbottom,
    cdllongleggeddoji: cdllongleggeddoji,
    cdllongline: cdllongline,
    cdlmarubozu: cdlmarubozu,
    cdlmatchinglow: cdlmatchinglow,
    cdlmathold: cdlmathold,
    cdlmorningdojistar: cdlmorningdojistar,
    cdlmorningstar: cdlmorningstar,
    cdlonneck: cdlonneck,
    cdlpiercing: cdlpiercing,
    cdlrickshawman: cdlrickshawman,
    cdlrisefall3methods: cdlrisefall3methods,
    cdlseparatinglines: cdlseparatinglines,
    cdlshootingstar: cdlshootingstar,
    cdlshortline: cdlshortline,
    cdlspinningtop: cdlspinningtop,
    cdlstalledpattern: cdlstalledpattern,
    cdlsticksandwich: cdlsticksandwich,
    cdltakuri: cdltakuri,
    cdltasukigap: cdltasukigap,
    cdlthrusting: cdlthrusting,
    cdltristar: cdltristar,
    cdlunique3river: cdlunique3river,
    cdlupsidegap2crows: cdlupsidegap2crows,
    cdlxsidegap3methods: cdlxsidegap3methods
  }


};
