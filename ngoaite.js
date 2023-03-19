function getMoneyInvestment(e, n) {
    let arrE = e.split(" ").map(Number);
    let arrM = [];
    let arrB = [];
    arrE.forEach((item, index) => {
        if (index % 2) {
            arrB.push(item);
        } else {
            arrM.push(item);
        }
    });

    let minM = Math.min(...arrM);
    let maxB = Math.max(...arrB);

    if (maxB < minM) {
        return n
    }

    if (n < minM) {
        return n;
    }

    return n - minM + maxB;

}

let e = "11 0 11 0 11 15";
let n = 10;

console.log(getMoneyInvestment(e, n));