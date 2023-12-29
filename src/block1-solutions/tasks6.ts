import {TCallbackFunction} from "../utils";

export function task6a(date: string, callback: TCallbackFunction): void {
    // toString переписывают
    callback(undefined, new Date(date).toJSON());
}


export function task6b(date: Date, callback: TCallbackFunction): void {
    const hours =  date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // в шаблонных функциях не возвращать что-то кроме строки
    const func = (value: number) => (value < 10 ? '0' : '') + value.toFixed(0)
    return callback(undefined, `${func(hours)}ч ${func(minutes)}м ${func(seconds)}с`);
}


export function task6c(date: Date, callback: TCallbackFunction): void {
    const year = date.getFullYear();
    const month = date.getMonth();
    const startDate = new Date(year, month, 1, 0, 0, 0);
    return callback(undefined, startDate);
}
