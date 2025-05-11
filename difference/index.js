function difference(arr, values) {
  if (Array.isArray(arr) && arr.length > 0) {
    if (Array.isArray(values) && values.length > 0) {
      return arr.filter(item => !values.includes(item))
    } else {
      return arr
    }
  }

  return []
}