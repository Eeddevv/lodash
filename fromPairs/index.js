function fromPairs(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let result = {}
    for (let index = 0; index < arr.length; index++) {
      const [key, value] = Array.isArray(arr[index]) ? arr[index] : [index]
      result[key] = value
    }
    return result
  }

  return {}
}