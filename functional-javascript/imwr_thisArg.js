module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (acc, curr) {
        acc.push(fn.call(null, curr));
        return acc;
    }, []);
};

