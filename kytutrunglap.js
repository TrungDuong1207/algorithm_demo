// function findChar(s) {
//     let arr = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) != i && arr.indexOf(s[i]) < 0 && s[i] != " ") {
//             arr.push(s[i]);
//         }
//     }
//     if (s === "" || s === " ") return [-1];
//     if (arr.length == 0) return [-1]

//     console.log(arr)

//     return arr.join(" ");

// }

// console.log(findChar("a b c "));


//sử dụng set
// function findDuplicateChars(str) {
//     let charSet = new Set();
//     let result = [];

//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (charSet.has(char) && char != " " && result.indexOf(char) < 0) {
//         result.push(char);
//       } else {
//         charSet.add(char);
//       }
//     }

//     return result.join(" ");
//   }

//   let str = " ";
//   let duplicates = findDuplicateChars(str);
//   console.log(duplicates); // ["a", " ", "b"]


//sử dụng Hashmap
function findDuplicateChars(str) {
    let charMap = new Map();
    let result = [];

    for (let char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    console.log(charMap)

    for (let [char, count] of charMap) {
        if (count > 1 && char != " ") {
            result.push(char);
        }
    }

    return result.join(" ");
}

let str = "aa b c a b";
let duplicates = findDuplicateChars(str);
console.log(duplicates); // ["a", " ", "b"]

