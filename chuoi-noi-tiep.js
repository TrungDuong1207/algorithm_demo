function insertSpace(s) {
    // let checkUpperCase = (str) => {
    //     if (str == str.toUpperCase()) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }

    // let arrS = s.split("");
    // for (let i = 0; i < arrS.length; i++) {
    //     let a = checkUpperCase(arrS[i]);
    //     if ()

    // }

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase() && i) {
            result += ' '
        }
        result += s[i].toLowerCase();
    }
    return result;

}

