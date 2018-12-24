import { interval } from "rxjs/internal/observable/interval";
import { secondsInTimeFormat } from "./converter";
import { map } from "rxjs/internal/operators/map";

/**
 * Use to discount number, from specific time to 0.
 */
export class CountDown {
    /**
     * @ignore
     */
    value: number = -1;
    /**
     * Determine if show with clock format (HH:MM:SS or <days>d <hours>h <minutes>m <seconds>s)
     */
    clockFormat: boolean;
    /**
     * Contruct count down and asign start max value to start discount
     * @param startValue Asign value to start discount time
     * @param clockFormat output format. Return with clock format or no
     */
    constructor(startValue: number, clockFormat: boolean = true) {
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
    start() {
        console.log(this.value);
        return interval(1000).pipe(
            map((x: number) => {
                return secondsInTimeFormat( this.value - x , 2, 1, this.clockFormat);
            })
        );
    }
}