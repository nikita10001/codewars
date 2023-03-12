//7 kyu https://www.codewars.com/kata/my-language-skills

function myLanguages(results) {
  let result = [];
  for (let key of Object.keys(results)) {
    if (results[key] >= 60) result.push(key);
  }
  return result.sort((a, b) => results[b] - results[a]);
}

//top solution
function myLanguages(results) {
  return Object.keys(results)
    .filter((r) => results[r] > 59)
    .sort((a, b) => results[b] - results[a]);
}
