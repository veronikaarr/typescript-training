import {TCallbackFunction} from "../utils";

export function delayedTimer(timeout: number): (result: any, callback: TCallbackFunction) => void {
    return function (result: any, callback: TCallbackFunction): void {
        setTimeout(() => {
            callback(undefined, result);
        }, timeout * 1000); // мс в сек
    };
}

export function delayedRegexp(pattern: RegExp): (value: string, callback: TCallbackFunction) => void {
    return function (value: any, callback: TCallbackFunction): void {
        const result = pattern.test(value);
        callback(undefined, result);
    };
}
