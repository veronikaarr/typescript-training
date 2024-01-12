import {TCallbackFunction} from "../utils";

export function task11a(code: string, callback: TCallbackFunction): void {
    try {
        const result = eval(code);
        callback(undefined, result);
    }
    catch (error){
        if (error instanceof Error) {
        callback(new Error(
            `Произошла ошибка при обработке eval: ${error.name}, ${error.message}`
        ))} else {
            callback(new Error("Произошла неизвестная ошибка при обработке eval"));
        }
    }
}

export function calculator(code: string, callback: TCallbackFunction): void {
    let result;
    try {
        result = eval(code);
    }
    catch (error){
        if (error instanceof Error) {
            callback(new Error(
                `Произошла ошибка при обработке eval: ${error.name}, ${error.message}`
            ))} else {
            return callback(new Error("Произошла неизвестная ошибка при обработке eval"));
        }
    }
    if (typeof result === "number"){
        callback(undefined, result);
    } else {
        callback(new Error("Неверный тип результата"))
    }
}
