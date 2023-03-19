// function solve(a, b) {
//     // Write your code here
    
//     let c = Number(a) + Number(b);
//     console.log(c);
//     let d = c.toString().split("").map(Number).reverse().join("");
//     return d;

// }
function solve(a, b) {
    // Write your code here
    let c = a.split("").reverse().map(Number).join("");
    let d = b.split("").reverse().map(Number).join("");
    
    let e = Number(c) + Number(d);

    return e.toString().split("").reverse().map(Number).join("");

}
let a = "243";
let b = "564";

console.log(solve(a,b));