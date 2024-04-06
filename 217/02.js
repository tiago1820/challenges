// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);
    return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
}

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1));