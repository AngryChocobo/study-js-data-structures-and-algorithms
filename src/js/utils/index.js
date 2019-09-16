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

// module.exports.