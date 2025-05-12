function flattenDepth(arr, depth = 1) {
  if (Array.isArray(arr) && arr.length > 0) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
      if (Array.isArray(arr[index]) && depth > 0) {
        result = [...result, ...flattenDepth(arr[index], depth - 1)]
      } else {
        result = [...result, arr[index]]
      }
    }

    return result
  }

  return []
}