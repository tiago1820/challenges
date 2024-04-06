// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    const numSet = new Set();
    return hasDuplicate(numSet, nums);
}

const hasDuplicate = (numSet, nums) => {
    for (const num of nums) {
        if (numSet.has(num)) return true;
        numSet.add(num);
    }
    return false;
}

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1));
