import {TCallbackFunction} from "../utils";
import {readFile} from "fs";

export function task7a(path: string, callback: TCallbackFunction): void {
    readFile(path,  (err, data) => {
        if (err){
            callback(err);
        }
        const str = data.subarray(0, 10).toString('base64');
        callback(undefined, str);
    })
}


export function task7b(path1: string, path2: string, callback: TCallbackFunction): void {
    readFile(path1,  (err, data1) => {
        if (err){
            callback(err);
            return
        }
        readFile(path2, (err, data2) => {
            if (err){
                callback(err);
                return
            }
            const mergedText = Buffer.concat([data1, data2]);
            callback(undefined, mergedText.byteLength);
        })
    })
}

export function task7c(path: string, callback: TCallbackFunction): void {
    readFile(path,(err, data) => {
        if (err){
            callback(err);
        }
        callback(undefined, data.toString().slice(-10));
    })
}
