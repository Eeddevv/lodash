function flattenDeep(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
      if (Array.isArray(arr[index])) {
        result = [...result, ...flattenDeep(arr[index])]
      } else {
        result = [...result, arr[index]]
      }
    }

    return result
  }

  return []
}