function getNumber(number) {
    let arr = [0]
    for (let i = 0; i < number; i++) {
        let arr1 = arr[i].toString().split("").map(Number);
        let j = 1;
        while (j < 1000) {
            let a = arr[i] + j;
            let aStr = a.toString().split("").map(Number);
            let check = false;
            for (let i = 0; i < aStr.length; i++) {
                if (arr1.indexOf(aStr[i]) != -1) {
                    j++;
                    check = true;
                    break;
                }
            }
            if (check == false) {
                arr.push(a);
                break;
            };
        }
    }
    return arr[number];
}

console.log(getNumber());