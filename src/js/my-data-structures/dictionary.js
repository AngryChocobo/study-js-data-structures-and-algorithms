// import { defaultToString } from '../utils/index';
// import ValuePair from './modules/value-pair';
const { defaultToString } = require('../utils/index');
const ValuePair = require('./modules/value-pair');


class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.table = {};
        this.toStrFn = toStrFn;
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(tableKey, value);
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair ? valuePair.value : undefined;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null; // 不是null 或 undefined
    }

    clear() {
        this.table = {};
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    keys() {
        return this.keyValues().map(pair => pair.key);
    }

    values() {
        return this.keyValues().map(pair => pair.value);
    }

    keyValues() {
        return Object.values(this.table);
    }

    forEach(fn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = fn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let str = `${valuePairs.toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            str = `${str}, ${valuePairs[i].toString()}`;
        }
        console.log(str);
        return str;
    }
}

let d1 = new Dictionary();
d1.set('name', '匿名');
console.log(d1.keyValues());
console.log(d1.keys());
console.log(d1.values());
d1.toString();
d1.forEach((key, value) => {
    console.log("in foreach, key: ", key);
    console.log("in foreach, value: ", value);
})
// console.log(d1.get('name'));