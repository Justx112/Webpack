import { Duration } from "./luxon.js"

export function timerCalculate(value) {
    let duratation = Duration.fromISOTime(value).as("milliseconds")
    duratation -= 1000
    return Duration.fromMillis(duratation).toFormat("hh:mm:ss")
}
