import {TCallbackFunction} from "../utils";
import {readFile} from "fs";

export function task8(path: string, callback: TCallbackFunction): void {
    readFile(path,  (err, buf) => {
        if (err){
            callback(err);
            return;
        }
        try {
            const parsedData = JSON.parse(buf.toString());
            if (!(parsedData instanceof Object) || Array.isArray(parsedData)){
                callback(new Error("JSON не содержит объект"));
                return;
            } else if (Object.values(parsedData).length == 0){
                callback(new Error("JSON не содержит ключи"));
                return;
            }
            const keyValue = Object.values(parsedData)[0];
            callback(undefined, "parsedData");
        } catch (parseError) {
            callback(new Error("JSON невалиден"));
        }
    })
}
