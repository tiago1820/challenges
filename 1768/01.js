// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

const mergeStrings = (word1, word2) => {
    let result = "";
    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length) {
        result += word1[i];
        i++;
        result += word2[j];
        j++;
    }

    result += word1.substring(i);
    result += word2.substring(j);
    return result;
}

const word1 = "abc";
const word2 = "pqrs";
console.log(mergeStrings(word1, word2));