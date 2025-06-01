interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    let grouping = {};
    for (const obj of this) {
        let key = fn(obj);
        if (grouping[key]) {
            grouping[key].push(obj)
        } else {
            grouping[key] = [];
            grouping[key].push(obj)            
        }
    }
    return grouping;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */