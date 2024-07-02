const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString=word
    .toLowerCase()
    .split('')
    .filter((character)=>alphanumerical.includes(character))
    .join('');

    const reversedStr=cleanString.split('').reverse().join("");

    return cleanString===reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
