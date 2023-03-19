// function findIndexSecondHighest(s) {
//     let arr = s.split(' ').map(num => parseInt(num)).sort();
//         console.log(arr)
//         let index = arr.indexOf(arr[arr.length-1])
//         console.log(index)
//         if (index === 0) {
//             return -1
//         } else {
//             let valueNeeded = arr[index-1]
//             return s.split(' ').indexOf(valueNeeded.toString())
//         }
//     }

function findIndexSecondHighest(s) {
    
    let arr = s.split(' ').map(Number);
    // if(arr.length == 1){
    //     return 0;
    // }
    let arrNew =[]; 
    arr.forEach(element => {
        arrNew.push(element)
    });
    let arrS = arr.sort();
    for(let i = arrS.length-2; i >= 0; i -- ){
        if(arrS[i] < arrS[arrS.length-1]){
            return arrNew.indexOf(arrS[i]);
        }
    }
}

let s ="1";

console.log(findIndexSecondHighest(s));