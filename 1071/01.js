// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

const gcdStrings = (str1, str2) => {
    const gcd = gcdLength(str1.length, str2.length);
    const candidate = str1.substring(0, gcd);
    if (isDivisor(candidate, str1) && isDivisor(candidate, str2)) {
        return candidate;
    } else {
        return "";
    }
}

const gcdLength = (a, b) => (b === 0 ? a : gcdLength(b, a % b));

const isDivisor = (sub, str) => {
    if (str.length % sub.length !== 0) return false;
    const repeats = str.length / sub.length;
    return sub.repeat(repeats) === str;
}

console.log(gcdStrings("ABCABC", "ABC"));