

//mảng 2 chieu có 10 phân tử mỗi ptu có 10 phần tử con có giatri [1-100000]
function twoDimensionalArrays() {
    const n = 10;
    const A = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            let randomNum;
            do {
                randomNum = Math.floor(Math.random() * 100000) + 1;
            } while (row.includes(randomNum));
            row.push(randomNum);
        }
        A.push(row);
    }
    return A;
}
console.log(twoDimensionalArrays());

// function checkPrime(x) {
//     if (x <= 1) {
//         return false;
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function twoDimensionalArrays() {
//     const n = 10;
//     const A = [];
//     for (let i = 0; i < n; i++) {
//         const row = [];
//         for (let j = 0; j < n; j++) {
//             let randomNum = Math.floor(Math.random() * 100000) + 1;
//             if(row.indexOf(randomNum) <  0){
//                 row.push(randomNum);
//             }
//         }
//         A.push(row);
//     }
//     return A;
// }

// console.log(twoDimensionalArrays());