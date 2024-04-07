// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

const mergeStrings = (word1, word2) => {
    return[...word1, ...word2].reduce((result, char, index) => {
        if(index < word1.length) result += word1[index];
        if(index < word2.length) result += word2[index];
        return result; 
    }, "");
}

const word1 = "abc";
const word2 = "pqr";
console.log(mergeStrings(word1, word2));