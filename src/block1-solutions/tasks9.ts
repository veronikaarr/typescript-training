import {TCallbackFunction} from "../utils";
import {readFile, stat} from "fs";

export function task9a(timeout: number, result: any, callback: TCallbackFunction): void {
    setTimeout(() => { callback(undefined, result) }, timeout);
}

export function task9b(msg: string, interval: number, counter: number, callback: TCallbackFunction): void {
    let currentCount = 0;
    let timerId = setInterval(
        () => {
            currentCount++;
            console.log(msg);

            if (currentCount == counter) {
                clearInterval(timerId);
                callback();
            }
        }, interval
    );
}

export function task9c(filePath: string, timeout: number, callback: TCallbackFunction): void {
    let timerOut = false;
    const timerId = setTimeout(() => {
        timerOut = true;
        return callback(new Error(`Файл не удалось прочитать за ${timeout} мс!`));
    }, timeout)

    stat(filePath, (error, stats) => {
        if (error) {
            clearTimeout(timerId);
            return callback(new Error('Файл не найден'));
        } else if (!stats.isFile()) {
            clearTimeout(timerId);
            return callback(new Error("По указанному пути не файл"));
        }

        readFile(filePath, (err, buf) => {
            clearTimeout(timerId); // Очистить таймер
            if (err) {
                return callback(err);
            } else if (!timerOut) {
                callback(undefined, buf.length);
            }
        })
    })
}
