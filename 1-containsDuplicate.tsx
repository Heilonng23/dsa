function containsDuplicate(nums: number[]): boolean {
   const numSet = new Set(nums);
   console.log(numSet);
   return numSet.size < nums.length;
}
