function fill(arr, value, start = 0, end) {
  if (Array.isArray(arr)) {
    let result = []
    const arrLength = arr.length
    const endPosition = end ? end : arrLength

    for (let index = 0; index < arrLength; index++) {
      if (index >= start && index < endPosition) {
        result = [...result, value]
      } else {
        result = [...result, arr[index]]
      }
    }
    return result
  }

  return []
}