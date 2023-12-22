import {TCallbackFunction} from "../utils";


export function task1Solution(param: any, callback: TCallbackFunction): void {
    if (typeof param === "string") {
        callback(undefined, param.length);
    }
    else if (typeof param === "number") {
        callback(undefined, Math.pow(param, 2));
    }
    else if (typeof param === "boolean") {
        callback(undefined, !param);
    }
    else if (Array.isArray(param)) {
        callback(undefined, param[param.length - 1]);
    }
    else if (param instanceof Object) {
        callback(undefined, Object.keys(param).join(", "));
    }
    else if (param === null) {
        callback(undefined, param);
    }
    else if (isNaN(param)) {
        callback(undefined, param);
    }
    else {
        // отсутствие пар-ров - undefined
        callback();
    }
}
