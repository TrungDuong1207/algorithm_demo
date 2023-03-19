function findNumber(s, x) {
    let d = s.split(" ").map(Number);
    
    let a = d.map((b)=>{
        return Math.abs(b-Number(x));
    })
    
    let b = Math.max(...a);
    
    let index = a.indexOf(b);
    return d[index];
}

s= "a";
v= "13.5 4456.23423423 723424.12 234234.1 534234.432"
x = "15.5";

console.log(findNumber(v,x));