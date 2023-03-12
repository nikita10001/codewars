//7 kyu https://www.codewars.com/kata/isograms
function isIsogram(str) {
  let tmp = str.toLowerCase();
  for (let i = 0; i < tmp.length; i++) {
    for (let j = i + 1; j < tmp.length; j++) {
      if (tmp[i] == tmp[j]) return false;
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moose'));
console.log(isIsogram('aba'));

// //top solution
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }
