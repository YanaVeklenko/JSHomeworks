function pow(x, y) {
  var result = 1;
  for (let i = 1; i <= y; i++) {
    result = result * x;
  }
  return result;
}

console.log('result = ' + pow(2, 3));