export type TCallbackFunction = (error?: Error, result?: any) => void;

export function getArray(): number[] {
    let s = 1;
    return new Array(100).fill(1).map(x => (s = (s * 2 + 1) % 101));
}
