//7 kyu https://www.codewars.com/kata/head-tail-init-and-last
const nums = [1, 2, 3, 4, 5];

const head = ([head, ...tail]) => head;
const tail = ([head, ...tail]) => tail;
const init = (nums) => nums.slice(0, nums.length - 1);
const last = (nums) => nums[nums.length - 1];

console.log(head(nums));
console.log(tail(nums));
console.log(init(nums));
console.log(last(nums));
