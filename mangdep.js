function perfectArray(s) {
    s = s.split(" ").map(Number);
    for (let i = 1; i < s.length - 1; i++) {
        let sum1 = 0;
        let sum2 = 0;
        let check = false
        for (let j = 0; j < i; j++) {
            sum1 += s[j];
        }
        for (let n = s.length - 1; n > i; n--) {
            sum2 += s[n];
        }

        if (sum1 == sum2) {
            return true;
        }
    }

    return false;
}
let s = "1 2 3 3";
console.log(perfectArray(s));