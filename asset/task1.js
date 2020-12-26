/*
* Создайте коллекуию Set с начальными значениями 1,2,3.
* С помощью метода has проверьете наличие элемента
* */


const set1 = new Set([1,2,3]);

const set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(3);

//const newArr = [1,2,3];
//const set3 = new Set(newArr);

let hasElem3, hasElem4;
hasElem3 = set1.has(3);
hasElem4 = set1.has(4);

console.log(set1.has(1));

set1.add(4);
set1.add(5);

for (let elem of set1){
    console.log(elem);
}

let sum = 0;
for (let elem of set1 ){
    sum += elem;
}

console.log(sum);
set1.delete(2);

set1.clear();