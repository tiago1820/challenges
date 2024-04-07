// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

const mergeStrings = (word1, word2) => {
    let result = "";
    const maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
    }
    return result;
}

const word1 = "abc";
const word2 = "pqrs";
console.log(mergeStrings(word1, word2));