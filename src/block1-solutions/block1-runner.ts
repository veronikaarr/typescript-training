import {
    task1,
    task2,
    task3,
    task4,
    task5,
    BufferTask,
    DateTask,
    throwJson,
    Timer,
    higherOrderFunctions, evalTasks
} from "./block1-tasks";
import {TCallbackFunction} from "../utils";

// блок управляет тасками, и таски друг на друга не влияют
export function Block1Runner(callback: TCallbackFunction) {
    task1Wrapper();

    // const - строго ниже, function - по замыканию доступен
    function task1Wrapper() {
        // number
        task1(() => {
            task2Wrapper();
        });
    }

    function task2Wrapper() {
        // number
        task2(() => {
            task3Wrapper();
        });
    }

    function task3Wrapper() {
        // number
        task3(() => {
            task4Wrapper();
        });
    }

    function task4Wrapper() {
        // number
        task4(() => {
            task5Wrapper();
        });
    }

    function task5Wrapper() {
        // number
        task5(() => {
            task6Wrapper();
        });
    }

    function task6Wrapper() {
        DateTask(() => {
            task7Wrapper();
        });
    }

    function task7Wrapper() {
        BufferTask(() => {
            task8Wrapper();
        });
    }
    function task8Wrapper() {
        throwJson(() => {
            task9Wrapper();
        });
    }
    function task9Wrapper() {
        Timer(() => {
            task10Wrapper();
        });
    }
    function task10Wrapper() {
        higherOrderFunctions(() => {
            task11Wrapper();
        });
    }
    function task11Wrapper() {
        evalTasks(() => {
            callback();
        });
    }
}
