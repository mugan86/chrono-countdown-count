import { Timer } from "./constants";

/**
 * Return in correct format to select clockFormat or no
 * @param timeInSeconds time in number format to specify total seconds in this moment
 * @param type counter type - 1: Counter Up / 2: Counter Down
 * @param limit Finish number
 * @param clockFormat Determine if return format take clock or d/h/m/s
 */
export function secondsInTimeFormat(timeInSeconds: number, type: number, limit: number = 0, clockFormat: boolean = false) {
    if (checkTimerFinish(timeInSeconds, type, limit)) {
        return 'FINISH';
    }
    const days = Math.floor(timeInSeconds / (Timer.ONE_DAY_SECONDS));
    const hours = Math.floor((timeInSeconds % (Timer.ONE_DAY_SECONDS))
        / (Timer.ONE_HOUR_SECONDS));
    const minutes = Math.floor((timeInSeconds % (Timer.ONE_HOUR_SECONDS)) / (Timer.ONE_MIN_SECONDS));
    const seconds = Math.floor((timeInSeconds % (Timer.ONE_MIN_SECONDS)));
    if (clockFormat) {
        if (days === 0) {
            return numberFormatClock(hours)
                + ':' + numberFormatClock(minutes)
                + ':' + numberFormatClock(seconds);
        }
        return days + 'd - ' + numberFormatClock(hours) 
                + ':' + numberFormatClock(minutes) + ':' + numberFormatClock(seconds);
    }
    return days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's';
}

/**
 * Return value with two digits. If value is < 10 return with before 0 concatenate
 * @param n Input number to return with two digits
 */
function numberFormatClock(n: number) {
    return (n < 10) ? '0'.concat(n.toString()) : n;
}

/**
 * Check if counter (count or discount) arrive to finish
 * @param timeInSeconds time in number format to specify total seconds in this moment
 * @param type counter type - 1: Counter Up / 2: Counter Down
 * @param limit Finish number
 */
function checkTimerFinish(timeInSeconds: number, type: number, limit: number) {
    if (timeInSeconds < 0 || timeInSeconds === undefined || timeInSeconds === null
        || type === 1 && timeInSeconds === limit || type === 2 && timeInSeconds === 0) {
        return true;
    }
    return false;
}