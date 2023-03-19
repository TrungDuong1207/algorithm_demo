var mergeTwoLists = function(list1, list2) {
    let arr = [...list1, ...list2].sort((a,b)=>{
        return a-b;
    });
    return arr
};
let list1 = [1,2,4];
let list2 = [1,3,4];
console.log(mergeTwoLists(list1, list2));