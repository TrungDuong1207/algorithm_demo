function solve(arr, m, n) {
    for (let i = 1; i < n; i++) {
        arr[i][0] += arr[i - 1][0];
    }

    // for 1st row
    for (let j = 1; j < m; j++) {
        arr[0][j] += arr[0][j - 1];
    }

    // for rest of the 2d matrix
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            arr[i][j] += Math.min(arr[i - 1][j - 1],
                Math.min(arr[i - 1][j],
                    arr[i][j - 1]));
        }
    }

    // Returning the value in
    // last cell
    return arr[n - 1][m - 1];

}

var arr = [[1, 2, 3],
[4, 8, 2],
[1, 5, 3]];
console.log(solve(arr,3,3));