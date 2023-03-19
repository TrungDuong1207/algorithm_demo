function solve(n) {
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    n = n.toString();
    n = n.replace(/[\, ]/g, '');
    if (n != parseFloat(n)) return 'not a number';
    var x = n.indexOf('.');
    if (x == -1)
        x = n.length;
    if (x > 15)
        return 'too big';
    var a = n.split('');
    var str = '';
    var sk = 0;

    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (a[i] == '1') {
                str += tn[Number(a[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (a[i] != 0) {
                str += tw[a[i] - 2] + ' ';
                sk = 1;
            }
        } else if (a[i] != 0) { // 0235
            str += dg[a[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred and ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk)
                str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }

    if (x != n.length) {
        var y = n.length;
        str += 'point ';
        for (var i = x + 1; i < y; i++)
            str += dg[a[i]] + ' ';
    }
    let strOrigin = str.replace(/\s+/g, ' ');
    strOrigin = strOrigin.charAt(0).toUpperCase() + strOrigin.slice(1);
    return strOrigin;

}


n = 1000;

console.log(solve(n));