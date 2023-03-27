//nổi bọt
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

  // sắp xếp chọn
  function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      var minIndex = i;
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }

  //chèn
  function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      var key = arr[i];
      var j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }