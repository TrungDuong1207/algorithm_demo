function solve(arr1, m, arr2, n) {
    // let arr = arr1.concat(arr2).sort();
    let arr = [...arr1, ...arr2];
    let l1 = (arr.length)/2;
    let a = m+n;

    if(a%2==0){
        let b = (arr[l1]+arr[l1-1])/2;
        return b.toFixed(5);
    } else {
        return (arr[Math.floor(l1)]).toFixed(5)
    }

}

let arr1=[1,2];
let m = 2
let arr2=[3,4]
let n = 2

console.log(solve(arr1, m, arr2, n));