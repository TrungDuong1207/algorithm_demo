let arr = [
    {
        id: 1,
        name: "Trung",
        age: 18,
        address: "HN",
        mark: 10
    },
    {
        id: 2,
        name: "Yến",
        age: 23,
        mark: 9
    },
    {
        id: 3,
        name: "Lâm",
        age: 22,
        mark: 10
    },
    {
        id: 4,
        name: "Hiếu",
        age: 19,
        mark: 6
    },
    {
        id: 5,
        name: "khánh",
        age: 30,
        mark: 8
    },
]

// function compare(type) {
//     const typeA = a.type
// }

function sortAll(arr, key) {

    if (!key || key === "" || key === " ") {
        return console.log("key must be required")
    } else {
        let sortArr = arr.sort(newFunction(key))
        return sortArr;
    }

    function newFunction(key) {
        return (a, b) => {
            if (typeof a[key] === "number") {
                return a[key] - b[key];
            } else {
                const aLower = a[key].toLowerCase();
                const bLower = b[key].toLowerCase();
                const compare = 0;

                if (aLower > bLower)
                    return 1;
                if (aLower < bLower)
                    return -1;

                return compare;
            }

        };
    }
}

// sortAll(arr);
// find to the stu have max mark

function maxMark(arr) {
    let result = [];
    max = arr[0];
    arr.forEach((item) => {
        if (item.mark > max.mark) {
            max = item.mark
        }
    })

    arr.forEach((item) => {
        if (item.mark === max.mark) {
            result.push(item)
        }
    })

    return result;
}

console.log(sortAll(maxMark(arr), "id"));

