/**
 * Use to discount number, from specific time to 0.
 */
export declare class Counter {
    /**
     * @ignore
     */
    value: number;
    /**
     * Determine if show with clock format (HH:MM:SS or <days>d <hours>h <minutes>m <seconds>s)
     */
    clockFormat: boolean;
    /**
     * Contruct count up and asign finish limit max value to start count
     * @param startValue Asign value to set limit value and ok to start count time
     * @param clockFormat output format. Return with clock format or no
     */
    constructor(limitValue: number, clockFormat?: boolean);
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
    start(interval_?: number): import("../../../../../../../../Volumes/DATA/Udemy/Proyects/NPM Course/nodets/chronometer/node_modules/rxjs/internal/Observable").Observable<string>;
}
