function subsum(arr, start, length) {

    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (length > arr.length - 1) {
        length = arr.length -1;
    }

    let sum = 0;

    for (let i = start; i <= length; i++) {
      if (isNaN(arr[i])) {
          return NaN;
      }
      sum += Number(arr[i]);
    }

    return Math.round(sum * 100) / 100;
}