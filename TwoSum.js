/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * @format
 */

let nums = [2, 7, 11, 15];
let target = 18;

let twoSum = (nums, target) => {
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(i, "I " + nums[i]);
    let j = i + 1;
    console.log(j, "J " + nums[j]);
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) {
        final.push(nums[i]);
        final.push(nums[j]);
        return final;
      }
      j++;
    }
  }
};
let res = twoSum(nums, target);
console.log(res);
