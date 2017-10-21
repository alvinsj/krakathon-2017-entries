const gcd = (n, d) => {
  if (d === 0) return n;
  return n >= d ? gcd(d, n % d) : gcd(n, d % n);
};

const find = function(numbers) {
  const first = numbers.shift();
  return numbers.reduce((result, cur) => {
    return gcd(result, cur);
  }, first);
};

console.log(find(process.argv.slice(2)));
