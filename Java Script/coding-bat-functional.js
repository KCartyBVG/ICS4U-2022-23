//doubling
function doubling(list) {
    let result = [];
    list.forEach(function value(v, i){
        result[i] = v * 2;
    });
    return result;
}

let a = [1, 2, 3];
console.log(doubling(a));


//square
function square(list) {
    let result = [];
    list.forEach(function value(v, i){
        result[i] = v * v;
    });
    return result;
}

console.log(square(a));

//addStar
function addStar(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v + '*';
    });
    return result;
}

let b = ['a', 'ab', 'abc'];
console.log(addStar(b));

//copies 3
function copies3(list) {
    let result = [];
    list.forEach(function value(v, i) {
        result[i] = v + v + v;
    });
    return result;
}

console.log(copies3(b));