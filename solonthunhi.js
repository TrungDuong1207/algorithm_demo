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

// function findIndexSecondHighest(s) {
    
//     let arr = s.split(' ').map(Number);
//     // if(arr.length == 1){
//     //     return 0;
//     // }
//     let arrNew =[]; 
//     arr.forEach(element => {
//         arrNew.push(element)
//     });
//     let arrS = arr.sort();
//     for(let i = arrS.length-2; i >= 0; i -- ){
//         if(arrS[i] < arrS[arrS.length-1]){
//             return arrNew.indexOf(arrS[i]);
//         }
//     }
// }

// let s ="1";

// console.log(findIndexSecondHighest(s));


function findIndexSecondHighest(arr) {
    let map = {
        maxItem : 0,
        secondIttem : 0
    }

    if (arr[0] > arr[1]){
        map.maxItem = arr[0];
        map.secondIttem = arr[1]
    } else {
        map.maxItem = arr[1];
        map.secondIttem = arr[0]
    }

    arr.forEach((item) =>{
        console.log("maxitem: "+ map.maxItem);
        console.log("secondIttem: "+ map.secondIttem);
        if(map.maxItem > item && item> map.secondIttem){
            map.secondIttem = item;
        }
        if(item > map.maxItem){
            map.secondIttem = map.maxItem;
            map.maxItem = item;

        }

        
    })

    return map.secondIttem

}

let arr= [2,5,1,5,2,4,3,9,9];

console.log(findIndexSecondHighest(arr));