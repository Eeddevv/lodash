function flatten(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
      result = Array.isArray(arr[index]) ? [...result, ...arr[index]] : [...result, arr[index]]
    }

    return result
  }

  return []
}