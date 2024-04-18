// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

const gcdString = (str1, str2) => {
    let gcd = gcdLength(str1.length, str2.length);
    let candidate = str1.substring(0, gcd);

    while (gcd > 0) {
        if (isDivisor(candidate, str1) && isDivisor(candidate, str2)) {
            return candidate;
        }
        gcd--;
        candidate = str1.substring(0, gcd);
    }
    return "";
}

const gcdLength = (a, b) => {
    return b === 0 ? a : gcdLength(b, a % b);
}

const isDivisor = (sub, str) => {
    if (str.length % sub.length !== 0) return false;
    const repeats = str.length / sub.length;
    return sub.repeats(repeats) === str;
}

console.log(gcdString("ABCABC", "ABC"));