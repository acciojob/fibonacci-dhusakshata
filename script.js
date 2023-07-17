function fibonacci(num) {
  if (num < 0) {
    return   "Invalid input. Please enter a non-negative integer." ;
  } else if (num === 1) {
    return 1;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= num; i++) {
    const nextFib = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = nextFib;
  }

  return fibCurrent;
}

module.exports = fibonacci;
