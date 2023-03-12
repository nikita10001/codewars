//7 kyu https://www.codewars.com/kata/javascript-mathematician

function calculate(...nums1) {
  return function (...nums2) {
    let sum = 0;
    for (let n of [...nums1, ...nums2]) {
      sum += n;
    }
    return sum;
  };
}
console.log(calculate(1, 1)(1));

///simple, clear
///const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);
