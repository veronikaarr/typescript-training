import {TCallbackFunction} from "../utils";

export function task5Solution(array: number[], arrayModificationType: string, callback: TCallbackFunction) {
    if (!array.length){
        return new Error("Входящий массив пустой");
    }

    switch (arrayModificationType) {
        case "forEach":
            let maxElement: number = array[0];
            array.forEach(function (element){
                if (element > maxElement){
                    maxElement = element;  // запуск процедур
                }
            });

            // перед return доп пробел
            return callback(
                undefined, `Результат 5 задачи: максимальный элемент ${maxElement}, 
                вариант модификации массива: ${arrayModificationType}`
            );
        case "map":
            const rootsArray = array.map((item) =>
                // без return
                // оператор-запятая, вычисляет выражение слева направо и результатом выражения будет последнее
                // в первых выражениях можно менять объект, а в конце возвращать этот объект
                // (1, 2, 3, console.log(item), Math.sqrt(item))
                // TODO: дублирование строк hotkey
                Math.sqrt(item)  // функциональное пр-е
            )
            const mapResult = rootsArray.slice(0, 3).join(', ');

            return callback(
                undefined, `Результат 5 задачи: корень для элементов массива: ${mapResult}, 
                вариант модификации массива: ${arrayModificationType}`
            );
            // } else {  // !!
        case "reduce":
            const reduceResult = array.reduce((accumulator, currentValue) =>
                currentValue % 2 ? accumulator - currentValue : accumulator + currentValue  // тернарный оператор
            , 0);  // 0 - начальное значение accumulator

            return callback(
                undefined, `Результат 5 задачи: ${reduceResult}, 
                вариант модификации массива: ${arrayModificationType}`
            );
        case "filter":
            const evenNumbers = array.filter((number) =>
                !(number % 2)
            );
            return callback(
                undefined, `Результат 5 задачи: только четные числа ${evenNumbers.slice(0, 3).join(', ')}, 
                вариант модификации массива: ${arrayModificationType}`
            );
        case "flat":
            const currentArray = [1, [2, [3, [4, [5, 6]]]], 7];
            const flattenedArray = currentArray.flat(4);
            return callback(
                undefined, `Результат 5 задачи: ${flattenedArray.slice(0, 5).join(', ')}, ` +
                `вариант модификации массива: ${arrayModificationType}`
            );
        default:
            return callback(undefined, `Вариант модификации массива не найден`);
    }
}
