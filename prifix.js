function buildArray(s) {
    let arrS = s.split(" ").map(Number);
    let b = [];
    let a = 0;
    for(let i= 0; i < arrS.length; i++){
        a += arrS[i]
        b.push(a)
    }
    return b;
}

let s ="1 2 3";
console.log(buildArray(s));

