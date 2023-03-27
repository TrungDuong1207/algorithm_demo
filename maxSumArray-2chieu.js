
// Tìm mảng có tổng các phần tử lớn nhất
const sortedArrays = arrays.sort((a, b) => {
    const sumA = a.reduce((acc, val) => acc + val, 0);
    const sumB = b.reduce((acc, val) => acc + val, 0);
    return sumB - sumA;
});

const maxSumArray = sortedArrays[0];
console.log('Mảng có tổng các phần tử lớn nhất là:', maxSumArray);

// Tìm các mảng trong đó có chứa cả 1 và 99
const arraysContain1And99 = arrays.filter((array) => array.includes(1) && array.includes(99));

console.log('Các mảng có chứa cả số 1 và số 99:', arraysContain1And99);