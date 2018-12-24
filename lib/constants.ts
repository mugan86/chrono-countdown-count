/**
 * Timer constants to use in conversion and other operations
 */
export enum Timer {
    ONE_HOUR_SECONDS = 60 * 60,
    DAY_HOURS = 24,
    ONE_MIN_SECONDS = 60,
    ONE_DAY_SECONDS = DAY_HOURS * ONE_HOUR_SECONDS,
    MS_PER_DAY = ONE_DAY_SECONDS * 1000
}