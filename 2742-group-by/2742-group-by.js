/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let grouping = {};
    return this.reduce((grouped, item) => {
        let key = fn(item);
        if (!grouping[key]) {
            grouping[key] = [];
        }
        grouping[key].push(item);
        return grouping;      
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */