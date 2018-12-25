/**
 * Return in correct format to select clockFormat or no
 * @param timeInSeconds time in number format to specify total seconds in this moment
 * @param type counter type - 1: Counter Up / 2: Counter Down
 * @param limit Finish number
 * @param clockFormat Determine if return format take clock or d/h/m/s
 */
export declare function secondsInTimeFormat(timeInSeconds: number, type: number, limit?: number, clockFormat?: boolean): string;
