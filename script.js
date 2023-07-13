function fibonacci(num) {
// your code here
	
	
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fibPrev = 0;  // Previous Fibonacci number
    let fibCurrent = 1;  // Current Fibonacci number

    for (let i = 2; i <= num; i++) {
      let nextFib = fibPrev + fibCurrent;
      fibPrev = fibCurrent;
      fibCurrent = nextFib;
    }
    return fibCurrent;
  }
}

module.exports = fibonacci;
