import {TCallbackFunction} from "../utils";

export function task4Solution(array: number[], arrayModificationType: string, callback: TCallbackFunction) {
    if (!array.length){  // number тут преобразуется в bool
        return new Error("Входящий массив пустой");
    }

    let result: string = 'Вариант модификации не найден';
    let newArray: number[] = [];
    let i: number;
    let value: number | undefined;
    switch(arrayModificationType) {
        case "pop-unshift":
            while (typeof (value = array.pop()) === "number"){  // c помощью typeof заставила ts считать что в value не undefined
                newArray.unshift(value);  // из конца первого в начало второго - порядок сохраняется
            }
            result = newArray.slice(0, 3).join(', ');
            break;
        case "shift-push":
            while (typeof (value = array.shift()) === "number"){
                newArray.push(value);  // из начала первого в конец второго - порядок сохраняется
            }
            result = newArray.slice(0, 3).join(', ');
            break;
        case "splice":  // 3м аргументом - ...[1, 2, 3]
            while (typeof (value = array.splice(-1, 1).at(0)) === "number"){
                newArray.push(value);  // из конца в конец - массив переворачив
            }
            result = newArray.slice(0, 3).join(', ');
            break;
        case "sort":
            array.sort((a, b) => {
                // если sort возвращает положит число, то он меняет местами их
                // если sort возвращает нулевое, не трогает
                // TODO: почитать
                // sort - quick sort
                // в большинстве случаев sort вызывается без аргументов, по возрастанию
                if (a > b) {
                    return -1;
                }
                if (a < b) {
                    return 1;
                }
                return 0;
            });
            result = array.slice(0, 3).join(', ');
            break;
        case "reverse":
            array.reverse();
            result = array.slice(0,3).join(', ')
            break;
        case "spread":
            // newArray = [...array.slice(2)];
            const [a, b, ...newArray2] = array;
            // spread при создании массива может быть в любом месте, в остальных случаях - в конце
            result = newArray2.slice(0, 3).join(', ');
            break;
    }
    callback(
        undefined, `Результат 4 задачи: ${result}, вариант модификации массива: ${arrayModificationType}`
    );
}
