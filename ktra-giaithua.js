function findLastNumber(a) {
    function factorial(x) {
        if (x === 0) {
            return 1;
        }
        return x * factorial(x - 1);
    }

    let number = factorial(a);
    let stringNumber = number.toString();
    let splitStringNumber = stringNumber.split("");
    let arr = splitStringNumber.reverse();
    console.log(arr);
    for(let i = 0, j = 1 ; i < arr.length; j++, i++){
        if(arr[i] === "0" && arr[i+1] != 0){
            return arr[i+1];
        }
    }
}

console.log(findLastNumber(12));