"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const interval_1 = require("rxjs/internal/observable/interval");
const converter_1 = require("./converter");
const map_1 = require("rxjs/internal/operators/map");
/**
 * Use to discount number, from specific time to 0.
 */
class CountDown {
    /**
     * Contruct count down and asign start max value to start discount
     * @param startValue Asign value to start discount time
     * @param clockFormat output format. Return with clock format or no
     */
    constructor(startValue, clockFormat = true) {
        /**
         * @ignore
         */
        this.value = -1;
        this.value = startValue;
        this.clockFormat = clockFormat;
    }
    /**
     * Time seconds counter until asign limit. Increment time values by second
     * @example
     * 1 EXAMPLE
     * this.value = 3.
     * this.clockFormat = false
     * Return:
     * 0d 0h 0m 3s
     * 0d 0h 0m 2s
     * 0d 0h 0m 1s
     * FINISH
     * 2 EXAMPLE
     * this.value = 3.
     * this.clockFormat = true
     * Return:
     * 00:00:03
     * 00:00:02
     * FINISH
     */
    start(interval_ = constants_1.Timer.ONE_SECOND_IN_MS) {
        return interval_1.interval(interval_).pipe(map_1.map((x) => {
            return converter_1.secondsInTimeFormat(this.value - x, 2, 1, this.clockFormat);
        }));
    }
}
exports.CountDown = CountDown;
