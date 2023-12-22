import {task1Solution, checkAndReturnLastChar, task3Solution, task4Solution, task5Solution} from "./index";
import {getArray, TCallbackFunction} from "../utils";


// TODO: тоже возвращает callback
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
        // null
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
        // NaN
        checkAndReturnLastChar(
            "",
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
        // undefined
        checkAndReturnLastChar(
            "",
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
        // number
        task3Solution(array, "for", (error?: Error, result?: any)=> {
            console.log(result);
            example2();
        });
    }
    function example2(){
        // string
        task3Solution(array, "for-in",(error?: Error, result?: any)=> {
            console.log(result);
            example3();
        });
    }
    function example3(){
        // boolean
        task3Solution(array, "for-of", (error?: Error, result?: any)=> {
            console.log(result);
            example4();
        });
    }
    function example4(){
        // object
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
