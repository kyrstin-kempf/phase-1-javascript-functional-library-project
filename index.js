const myEach = function (collection, callback) {
    for(let ojbectValues in collection) {
        callback(collection[ojbectValues])
    }
    return collection;
}

const myMap = function (collection, callback) {
    let modifiedArray = []
    for(let ojbectValues in collection) {
        modifiedArray.push(callback(collection[ojbectValues]))
    }
    return modifiedArray;
}

const myReduce = function (collection, callback, acc) {
    let myReduceCopy;
    if(collection instanceof Array){
        myReduceCopy = [...collection]
    }
    else{
        myReduceCopy = Object.values(collection)
    }
    // acc = acc || myReduceCopy.shift();
    let i;
    if(acc){
        i = 0
    }
    else{
        i = 1
        acc = myReduceCopy[0];
    }
    console.log("myReduceCopy", myReduceCopy)
    console.log("collection", collection)
    // for(let ojbectValues in myReduceCopy) {
    //     acc = callback(acc, myReduceCopy[ojbectValues], myReduceCopy)
    // }
    for(i; i < myReduceCopy.length; i++){
        acc = callback(acc, myReduceCopy[i], myReduceCopy)
    }
    return acc;
}

const myFind = function (collection, callback) {
    for(let ojbectValues in collection) {
        let element = collection[ojbectValues];
        if (callback(element)){
            return element;
        }
    }
}

const myFilter = function (collection, callback) {
    let selectedArray = [];

    for(let ojbectValues in collection) {
        let element = collection[ojbectValues];
        if (callback(element)){
            selectedArray.push(element);
        }
    }
    return selectedArray
}

const mySize = function (collection) {
    return Object.keys(collection).length
}

const myFirst = function (collection, n = 1) {
    // let arrayValues = Object.keys(collection)[0]
    let count = 1;
    let array = [];

    for(let arrayValues in collection) {
        if(count <= n) {
            array.push(collection[arrayValues]);
            count++
        }
    }
    return array.length > 1 ? array : array[0]
    // return collection[arrayValues]   
}

const myLast = function (collection, n = 1) {
    let arrayStart = collection.length - n;

    return n > 1 ? collection.slice(arrayStart, collection.length) : collection[arrayStart];     
}

const myKeys = function (obj) {
    // console.log(Object.keys(collection))
    // let arrayOfKeys = [];
    // let collectionKeys = Object.keys(collection)

    // return arrayOfKeys.push(collectionKeys)
    // console.log(arrayOfKeys.push(collectionKeys))
    return Object.keys(obj)
}

const myValues = function (obj) {
    // let arrayOfValues = [];
    // let collectionValues = Object.values(collection)

    // return arrayOfValues.push(collectionValues)
    return Object.values(obj)
}