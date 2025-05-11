function differenceBy(arr, values, fn) {
  if (Array.isArray(arr) && arr.length > 0) {
    if (Array.isArray(values) && values.length > 0) {
      
    } else {
      return arr;
    }
  }

  return [];
}

console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
