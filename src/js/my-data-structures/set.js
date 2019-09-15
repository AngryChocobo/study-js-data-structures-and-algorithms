class MySet {
    constructor() {
        this.items = {};
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
        // return element in this.items;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    union(otherSet) { //交集
        const unionSet = new MySet();
        Object.keys(this.items).forEach(key => {
            unionSet.add(this.items[key]);
        });
        otherSet.values().forEach(value => {
            unionSet.add(value);
        });
        return unionSet;
    }

    intersection(otherSet) { //并集
        const intersectionSet = new MySet();
        let biggerSet = this;
        let smallerSet = otherSet;
        if (biggerSet.size() <= smallerSet.size()) {
            smallerSet = this;
            biggerSet = otherSet;
        }
        smallerSet.values().forEach(value => {
            if (!intersectionSet.has(value) && otherSet.has(value)) {
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }

    difference(otherSet) { //差集
        const differenceSet = new MySet();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubSetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        return this.values().every(value => otherSet.has(value));;
    }

}

const set1 = new MySet();
set1.add(1);
set1.add("a");
set1.add("b");
set1.add("b");
console.log("set1: ", set1);
console.log("set1 has 1: ", set1.has("1"));


const set2 = new MySet();
set2.add(1);
set2.add("c");
set2.add("a");
set2.add("d");
console.log("set2: ", set2);

console.log("after union: ", set1.union(set2));
console.log("after intersection: ", set1.intersection(set2));
console.log("after set1 difference set2: ", set1.difference(set2));
console.log("after set2 difference set1: ", set2.difference(set1));
console.log("set1 is sub set of set2: ", set1.isSubSetOf(set2));
console.log("set2 is sub set of set1: ", set2.isSubSetOf(set1));


console.log(set1);
console.log(set2);

const set3 = new Set();
set3.add(1);
set3.add(0);
console.log(set3.size);
console.log(set3.values());
