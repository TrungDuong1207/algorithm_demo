function solve(arr) {
    const sum = arr.reduce((b, a) => b + a, 0);
    const avg = sum / arr.length;
    const avgfloat = Math.floor(avg);
    let count = 0;
    if(arr.length == 0){
        return [0,0];
    } else if(arr.length == 1){
        return [avg, 0];
    }else {
        arr.forEach(item => {
            if(item < avgfloat){
                count++;
            }
        });
        return [avgfloat,count];
    }
    
}

arr = [];

console.log(solve(arr));