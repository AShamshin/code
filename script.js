function solution(nums) {
  return nums !== null && nums.length > 1 ? nums.sort((a, b) => a - b) : [];
}
console.log(solution(null));
