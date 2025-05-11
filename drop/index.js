function drop(arr, num) {
  if (Array.isArray(arr) && arr.length > 0) {
    if (num && typeof num === 'number') {
      if (num > arr.length) return []

      let result = []
      
      for (let index = 0; index < arr.length; index++) {
        if (index + 1 === num) {
          result.length = 0
        } else {
          result = [...result, arr[index]]
        }
      }

      return result
      
    } else {
      return arr
    }
  }

  return []
}