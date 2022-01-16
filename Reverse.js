function reverse(arr) {
    let arr2 = [];
    for( let i = arr.length-1 ; i >= 0;i-- ){
        arr2.push(arr[i]);
    }
    return arr2;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]