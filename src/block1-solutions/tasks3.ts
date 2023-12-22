import {TCallbackFunction} from "../utils";

// cntrl + cmd + G
export function task3Solution(array: number[], cycleType: string, callback: TCallbackFunction) {
    let maxElement: number = array[0];
    switch(cycleType){
        case "for":
            for(let i = 1; i < array.length; i++) {
                if(array[i] > maxElement){
                    maxElement = array[i];
                }
            }
            break;
        case "for-in":
            for (const index in array){
                if(array[index] > maxElement){
                    maxElement = array[index]
                }
            }
            break;
        case "for-of":
            for (const el of array){
                if(el > maxElement){
                    maxElement = el
                }
            }
            break;
        case "while":
            let i = 0;
            maxElement = array[0];
            while(++i < array.length){
                if(array[i] > maxElement){
                    maxElement = array[i];
                }
            }
            break;
    }
    callback(undefined, `maxElement в 3 задании: ${maxElement}, cycleType: ${cycleType}`);
}
