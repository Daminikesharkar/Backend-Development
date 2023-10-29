const obj1 = {
    key1: "val 1",
    key2: "val 2",
    key3: "val 3"
}

const obj2 = {...obj1};
console.log(obj2)
console.log(obj1 === obj2);

const obj3 = {...obj1,key3: 'value 3'}
console.log(obj3)


function restDemo(...args){
    console.log(args);
}

const arr = [1,2,3,4,5]
restDemo(...arr)
