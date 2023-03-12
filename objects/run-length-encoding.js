//6 kyu https://www.codewars.com/kata/run-length-encoding

function runLengthEncoding(str) {
  let result = [];
  let counter;
  let i = 0;
  for (; i < str.length; i++) {
    counter = 1;
    while (str[i] == str[i + 1]) {
      counter++;
      i++;
    }
    result.push([counter, str[i]]);
  }
  return result;
}
console.log(runLengthEncoding('aaaaaaaaaaaa'));

//top
// function runLengthEncoding(str) {
//   var arr = [],
//     counter = 1;

//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       counter++;
//     } else {
//       arr.push([counter, str[i]]);
//       counter = 1;
//     }
//   }

//   return arr;
// }
