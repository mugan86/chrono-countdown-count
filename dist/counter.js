"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const converter_1 = require("./converter");
const constants_1 = require("./constants");
/**
 * Use to discount number, from specific time to 0.
 */
class Counter {
    /**
     * Contruct count up and asign finish limit max value to start count
     * @param startValue Asign value to set limit value and ok to start count time
     * @param clockFormat output format. Return with clock format or no
     */
    constructor(limitValue, clockFormat = true) {
        /**
         * @ignore
         */
        this.value = -1;
        this.value = limitValue;
        this.clockFormat = clockFormat;
    }
    /**
     * Time seconds counter until asign limit. Increment time values by second
     * @example
     * countLimit = 3.
     * Return:
     * 0d 0h 0m 0s
     * 0d 0h 0m 1s
     * 0d 0h 0m 2s
     * FINISH
     * @param countLimit Count only to until asign limit
     */
    start(interval_ = constants_1.Timer.ONE_SECOND_IN_MS) {
        return interval_1.interval(interval_).pipe(map_1.map((x) => {
            return converter_1.secondsInTimeFormat(x, 1, this.value, this.clockFormat);
        }));
    }
}
exports.Counter = Counter;
