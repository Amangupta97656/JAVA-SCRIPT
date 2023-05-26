function flat(arr, depth) {
  if (depth === 0) {
    return arr.slice(); 
  }

  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nested = flat(arr[i], depth - 1); 
      flattened.push(...nested); 
    } 
    else {
      flattened.push(arr[i]); 
          }
  }

  return flattened;
}