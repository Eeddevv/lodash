function concat(...args) {
  let result = []
  for (let index = 0; index < args.length; index++) {
    if (Array.isArray(args[index])) {
      result.push(...args[index])
    } else {
      result.push(args[index])
    }
  }

  return [...result]
}