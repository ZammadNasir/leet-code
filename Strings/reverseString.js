// 344

const reverseString = (s) => {

    if(s.length < 2) return s

    let left = 0
    let right = s.length - 1

    while(left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp

        left++
        right--
    }
    return s
}


console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))