import {task6a, task6b, task6c, task7a, task7b, task7c} from "./index";
import {TCallbackFunction} from "../utils";

// todo перенести в блок1
export function DateTask(callback: TCallbackFunction) {
    task6aWrapper();
    function task6aWrapper(){
        // number
        task6a("01.12.2021", (error?: Error, result?: any)=> {
            console.log(result);
            task6bWrapper();
        });
    }
    function task6bWrapper(){
        // string
        task6b(new Date("2021-12-01T23:15:56"), (error?: Error, result?: any)=> {
            console.log(result);
            task6cWrapper();
        });
    }
    function task6cWrapper(){
        // boolean
        task6c(new Date("2021-12-05T23:15:56"), (error?: Error, result?: any)=> {
            console.log(result.toString());
            callback();
        });
    }
}


export function BufferTask(callback: TCallbackFunction) {
    const path =
        ""
    const path2 =
        ""
    task7aWrapper();
    function task7aWrapper(){
        // number
        task7a(path, (error?: Error, result?: any)=> {
            console.log(error ?? result);
            task7bWrapper();
        });
    }
    function task7bWrapper(){
        // string
        task7b(path, path2,(error?: Error, result?: any)=> {
            console.log(error ?? result);
            task7cWrapper();
        });
    }
    function task7cWrapper(){
        // boolean
        task7c(path, (error?: Error, result?: any)=> {
            console.log("Задача task7c");
            console.log(error ?? result);
            callback();
        });
    }
}
