/**
 * Use to discount number, from specific time to 0.
 */
export declare class CountDown {
    /**
     * @ignore
     */
    value: number;
    /**
     * Determine if show with clock format (HH:MM:SS or <days>d <hours>h <minutes>m <seconds>s)
     */
    clockFormat: boolean;
    /**
     * Contruct count down and asign start max value to start discount
     * @param startValue Asign value to start discount time
     * @param clockFormat output format. Return with clock format or no
     */
    constructor(startValue: number, clockFormat?: boolean);
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
    start(interval_?: number): import("rxjs/internal/Observable").Observable<string>;
}
