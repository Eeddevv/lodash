function chank(arr, size) {
  if (Array.isArray(arr) && arr.length > 0) {
    let result = []
    for (let index = 0; index < arr.length; index = index + size) {
      result.push([...arr.slice(index, index + size)])
    }
    return result
  } 

  return []
}