function solve(a, b) {
    let d = {
        c: "0",
        e: "0"
    }
    let arr = [];
    function ce(d) {
        if (d.c != d.e) {
            d.c = "1";
            d.e = "0";
            arr.unshift(d.c);

        } else {
            if (d.c == "0") {
                arr.unshift(d.c);
            }
            if (d.c == "1") {
                d.c = "0"
                arr.unshift(d.c);
            }
        }
    }
    let arrA = a.split(" ")[0].split("");
    let arrB = b.split(" ")[0].split("");
    // let arrB = b.split("");
    let l1 = arrA.length;
    let l2 = arrB.length;
    if (l1 > l2) {
        for (let i = l1 - 1, j = l2 - 1; j >= 0; i--, j--) {
            if (arrA[i] != arrB[j]) {
                d.c = "1";
                ce(d);
            } else {
                if (arrA[i] === "0") {
                    d.c = "0";
                    ce(d);
                }
                if (arrA[i] === "1") {
                    d.c = "0";
                    ce(d);
                    d.e = "1";
                }
            }
        }
        for (let i = l1 - l2 - 1; i >= 0; i--) {
            if (arrA[i] != d.e) {
                d.c = "1";
                arr.unshift(d.c);
                d.e = "0"
            } else {
                d.c = "0";
                arr.unshift(d.c);
            }
        }
        if (d.e == "1") {
            arr.unshift(d.e);
        }
    } else {
        for (let i = l1 - 1, j = l2 - 1; i >= 0; i--, j--) {
            if (arrA[i] != arrB[j]) {
                d.c = "1";
                ce(d);
            } else {
                if (arrA[i] === "0") {
                    d.c = "0";
                    ce(d);
                }
                if (arrA[i] === "1") {
                    d.c = "0";
                    ce(d);
                    d.e = "1";
                }
            }
        }
        for (let i = l2 - l1 - 1; i >= 0; i--) {
            if (arrB[i] != d.e) {
                d.c = "1";
                arr.unshift(d.c);
                d.e = "0"
            } else {
                d.c = "0";
                arr.unshift(d.c);
            }
        }
        if (d.e == "1") {
            arr.unshift(d.e);
        }
    }

    return arr.join("");

}

a = "1111";
b = "1011";

console.log(solve(a, b));