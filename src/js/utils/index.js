const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

module.exports.defaultEquals = (a, b) => a === b;

module.exports.defaultToString = (item) => {
    if (item === null) {
        return 'NULL';
    }
    if (item === undefined) {
        return 'undefined';
    }
    if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

module.exports.Compare = Compare;

module.exports.defaultCompare = (a, b) => {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}