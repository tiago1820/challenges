// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const checkDuplicate = (seen, num) => {
    if(seen[num]) return true;
    seen[num] = true;
    return false;
}

const containsDuplicate = (nums) => {
    let seen = {};
    return nums.some(num => checkDuplicate(seen, num));
}

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1));