function solve(arr) {
    function checkPrime(x) {
        if (x <= 1) {
            return false;
        }
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }
    let arrNew = [];
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i].length; j++){
            if(checkPrime(arr[i][j])== true && arrNew.indexOf(arr[i][j]) == -1){
                arrNew.push(arr[i][j]);
            }
        }
    }

    if (arrNew.length != 0) {
        return arrNew.sort((a,b)=>{
            return a-b;
        });
    } else {
        return [-1];
    }

}

let arr = [
    [1, 2, 8, 43],
    [9, 49, 11, 7],
    [11, 23, 4, 0],
    [1, 2, 6, 51]
];

console.log(solve(arr));

// let a =[0,1,2,4];

// let b = 5;
// console.log(a.indexOf(b));