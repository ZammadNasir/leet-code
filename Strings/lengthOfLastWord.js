// 58

const lengthOfLastWord = (s) => {

  let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            count++;
        } else if (count > 0) {
            return count;
        }
    }

    return count;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("luffy is still joyboy rytu  aa adasdsad        "))
console.log(lengthOfLastWord(" "))
console.log(lengthOfLastWord("a"))