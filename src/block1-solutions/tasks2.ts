import {readFile, stat} from "fs";
import {TCallbackFunction} from "../utils";


export function checkAndReturnLastChar(path: string, callback: TCallbackFunction): void {
    // statSync, fs/promises
    stat(path, (error, stats) => {
        if (error) {
            return callback(new Error('Файл не найден'));
        }
        if (stats.isFile()) {
            readFile(path, (err, data) => {
                const string_data = data.toString();
                return callback(undefined, string_data.at(-2));
            })
        } else {
            callback(new Error("По указанному пути не файл"));
        }
    });
}
