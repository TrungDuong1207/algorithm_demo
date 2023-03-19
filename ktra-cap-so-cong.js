function checkPlusLevel(s) {
    let a;
    a = s[1] - s[0];
    if(a!=0){
        for (let i = 0; i < s.length-1; i++) {

            if (s[i + 1] - s[i] != a) {
                return false;
            }
    
        }
        return true
    } else {
        return false
    } 
    
}

s = [1,2,3,4];

console.log(checkPlusLevel(s));