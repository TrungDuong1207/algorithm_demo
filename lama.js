function valuerRoman(char) {
    if (char == 'I' || char == 'i')
        return 1;
    if (char == 'V' || char == 'v')
        return 5;
    if (char == 'X' || char == 'x')
        return 10;
    if (char == 'L' || char == 'l')
        return 50;
    if (char == 'C' || char == 'c')
        return 100;
    if (char == 'D' || char == 'd')
        return 500;
    if (char == 'M' || char == 'm')
        return 1000;
    return -1;
}

function RomanToDec(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        var s1 = valuerRoman(str[i]);
        if (i + 1 < str.length) {
            var s2 = valuerRoman(str[i + 1]);
            if (s1 >= s2) {
                sum += s1;
            }
            else {
                sum += s2 - s1;
                i++;
            }
        }
        else {
            sum += s1;
            i++;
        }
    }
    return sum;
}