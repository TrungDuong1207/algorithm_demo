var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(hashMap[target-num] !== undefined){
            return [hashMap[target-num], i]
        }

        hashMap[num] = i;
    }
};

let nums = [2,7,7,9,2];
let target = 9;

console.log(twoSum(nums, target))