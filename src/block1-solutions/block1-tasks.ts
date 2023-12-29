import { resolve } from "path";

import {
    task1Solution, checkAndReturnLastChar, task3Solution, task4Solution, task5Solution,
    task6a, task6b, task6c, task7a, task7b, task7c, task8, task9a, task9b
} from "./index";
import {getArray, TCallbackFunction} from "../utils";

const twoLevelsUp = resolve(__dirname, '../..');


export function task1(callback: TCallbackFunction) {
    example1();
    // const - строго ниже, function - по замыканию доступен
    function example1(){
        // number
        task1Solution(5, (error?: Error, result?: any)=> {
            console.log(result);
            example2();
        });
    }
    function example2(){
        // string
        task1Solution("test", (error?: Error, result?: any)=> {
            console.log(result);
            example3();
        });
    }
    function example3(){
        // boolean
        task1Solution(true, (error?: Error, result?: any)=> {
            console.log(result);
            example4();
        });
    }
    function example4(){
        // object
        task1Solution({"k": "v", "k1": "v1"}, (error?: Error, result?: any)=> {
            console.log(result);
            example5();
        });
    }
    function example5(){
        // array
        task1Solution([1, 2, 5], (error?: Error, result?: any)=> {
            console.log(result);
            example6();
        });
    }
    function example6(){
        // null
        task1Solution(null, (error?: Error, result?: any)=> {
            console.log(result);
            example7();
        });
    }
    function example7(){
        // NaN
        task1Solution(NaN, (error?: Error, result?: any)=> {
            console.log(result);
            example8();
        });
    }
    function example8(){
        // undefined
        task1Solution(undefined, (error?: Error, result?: any)=> {
            console.log(result);
            callback();
        });
    }
}

export function task2(callback: TCallbackFunction) {
    example1();
    function example1(){
        checkAndReturnLastChar("fdffd", (error?: Error, result?: any)=> {
            if (error){
                console.log(`Ошибка в task2: ${error.message}`);
                example2();
                return
            }
            console.log(`Результат task2: предпоследний символ: ${result}`);
            example2();
        });
    }
    function example2(){
        checkAndReturnLastChar(
            `${twoLevelsUp}/input_data`,
            (error?: Error, result?: any
            )=> {
            if (error){
                console.log(`Ошибка в task2: ${error.message}`);
                example3();
                return
            }
            console.log(`Результат task2: предпоследний символ: ${result}`);
            example3();
        });
    }
    function example3(){
        checkAndReturnLastChar(
            `${twoLevelsUp}/input_data/task2.txt`,
            (error?: Error, result?: any
            )=> {
            if (error){
                console.log(`Ошибка в task2: ${error.message}`);
                callback();
                return
            }
            console.log(`Результат task2: предпоследний символ: ${result}`);
            callback();
        });
    }
}

export function task3(callback: TCallbackFunction){
    let s = 1;
    const array = getArray();
    let maxElement = Math.max(...array);
    console.log(`Ожидаемый maxElement: ${maxElement}`);
    example1();

    function example1(){
        task3Solution(array, "for", (error?: Error, result?: any)=> {
            console.log(result);
            example2();
        });
    }
    function example2(){
        task3Solution(array, "for-in",(error?: Error, result?: any)=> {
            console.log(result);
            example3();
        });
    }
    function example3(){
        task3Solution(array, "for-of", (error?: Error, result?: any)=> {
            console.log(result);
            example4();
        });
    }
    function example4(){
        task3Solution(array, "while", (error?: Error, result?: any)=> {
            console.log(result);
            callback();
        });
    }
}


export function task4(callback: TCallbackFunction){
    let array: number[];
    example1();

    function example1(){
        array = getArray();
        console.log(`\nИсходный массив для 4 задачи: ${array}\n`);
        task4Solution(array, "pop-unshift", (error?: Error, result?: any)=> {
            console.log(result);
            example2();
        });
    }
    function example2(){
        // нужно заново инициализировать array
        array = getArray();
        task4Solution(array, "shift-push", (error?: Error, result?: any)=> {
            console.log(result);
            example3();
        });
    }
    function example3(){
        array = getArray();
        task4Solution(array, "splice", (error?: Error, result?: any)=> {
            console.log(result);
            example4();
        });
    }
    function example4(){
        array = getArray();
        task4Solution(array, "sort", (error?: Error, result?: any)=> {
            console.log(result);
            example5();
        });
    }
    function example5(){
        array = getArray();
        task4Solution(array, "reverse", (error?: Error, result?: any)=> {
            console.log(result);
            example6();
        });
    }
    function example6(){
        array = getArray();
        task4Solution(array, "spread", (error?: Error, result?: any)=> {
            console.log(result);
            callback();
        });
    }
}

export function task5(callback: TCallbackFunction) {
    let array: number[];
    example1();

    function example1(){
        array = getArray();
        console.log(`\nИсходный массив для 5 задачи: ${array}\n`);
        task5Solution(array, "forEach", (error?: Error, result?: any)=> {
            console.log(result);
            example2();
        });
    }
    function example2(){
        // нужно заново инициализировать array
        array = getArray();
        task5Solution(array, "map", (error?: Error, result?: any)=> {
            console.log(result);
            example3();
        });
    }
    function example3(){
        array = getArray();
        task5Solution(array, "reduce", (error?: Error, result?: any)=> {
            console.log(result);
            example4();
        });
    }
    function example4(){
        array = getArray();
        task5Solution(array, "filter", (error?: Error, result?: any)=> {
            console.log(result);
            example5();
        });
    }
    function example5(){
        array = getArray();
        task5Solution(array, "flat", (error?: Error, result?: any)=> {
            console.log(result);
            callback();
        });
    }
}


export function DateTask(callback: TCallbackFunction) {
    task6aWrapper();
    function task6aWrapper(){
        task6a("01.12.2021", (error?: Error, result?: any)=> {
            console.log(result);
            task6bWrapper();
        });
    }
    function task6bWrapper(){
        task6b(new Date("2021-12-01T23:15:56"), (error?: Error, result?: any)=> {
            console.log(result);
            task6cWrapper();
        });
    }
    function task6cWrapper(){
        task6c(new Date("2021-12-05T23:15:56"), (error?: Error, result?: any)=> {
            console.log(result.toString());
            callback();
        });
    }
}


export function BufferTask(callback: TCallbackFunction) {
    const path1 = `${twoLevelsUp}/input_data/task7.txt`
    const path2 = `${twoLevelsUp}/input_data/task7b.txt`

    task7aWrapper();
    function task7aWrapper(){
        task7a(path1, (error?: Error, result?: any)=> {
            console.log(error ?? result);
            task7bWrapper();
        });
    }
    function task7bWrapper(){
        task7b(path1, path2,(error?: Error, result?: any)=> {
            console.log(error ?? result);
            task7cWrapper();
        });
    }
    function task7cWrapper(){
        task7c(path1, (error?: Error, result?: any)=> {
            console.log("-----Задача task7c-----");
            console.log(error ?? result);
            callback();
        });
    }
}


export function throwJson(callback: TCallbackFunction) {
    const validJsonPath = `${twoLevelsUp}/input_data/task8/valid.json`
    const invalidJsonPath = `${twoLevelsUp}/input_data/task8/invalid.json`
    const emptyJsonPath = `${twoLevelsUp}/input_data/task8/empty.json`
    const emptyObjectPath = `${twoLevelsUp}/input_data/task8/empty-object.json`

    example1();
    function example1(){
        task8(validJsonPath, (error?: Error, result?: any)=> {
            console.log(`Результат задачи 8a: ${error ?? result}`);
            example2();
        });
    }
    function example2(){
        task8(invalidJsonPath,(error?: Error, result?: any)=> {
            console.log(`Результат задачи 8b: ${error ?? result}`);
            example3();
        });
    }
    function example3(){
        task8(emptyJsonPath,(error?: Error, result?: any)=> {
            console.log(`Результат задачи 8с: ${error ?? result}`);
            example4();
        });
    }
    function example4(){
        task8(emptyObjectPath,(error?: Error, result?: any)=> {
            console.log(`Результат задачи 8d: ${error ?? result}`);
            callback();
        });
    }
}


export function Timer(callback: TCallbackFunction) {
    example1();
    function example1(){
        task9a(10, "Строка после таймаута", (error?: Error, result?: any)=> {
            console.log(`Результат задачи 9a: ${error ?? result}`);
            example2();
        });
    }
    function example2(){
        task9b("msg", 1000, 5, (error?: Error, result?: any)=> {
            console.log(`Результат задачи 9b: ${error ?? result}`);
            callback();
        });
    }
}
