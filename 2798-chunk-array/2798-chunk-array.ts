type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let chunk = [];
    let chunks = [];
    let val = 0;
    for (const obj of arr) {
        if (val < size) {
            chunk.push(obj);
            val++;
        } else {
            chunks.push(chunk);
            chunk = [obj];
            val = 1;
        }
    }
    if (chunk.length > 0) {
        chunks.push(chunk);
    }
    return chunks;
};
