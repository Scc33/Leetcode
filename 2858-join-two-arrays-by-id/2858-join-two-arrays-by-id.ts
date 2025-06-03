type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let joined = {};
    arr1.forEach((values) => {
        joined[values.id] = values;
    });
    console.log(joined)
    arr2.forEach((values) => {
        if (values.id in joined) {
            Object.keys(values).forEach((key) => {
                joined[values.id][key] = values[key];
            })
        } else {
            joined[values.id] = values;
        }
    });
    console.log(joined);
    let joinedArr = []
    Object.keys(joined).forEach((id) => {
        joinedArr.push(joined[id])
    })
    return joinedArr;
};