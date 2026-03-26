const isPalindrome = (s) => {

    // const newStr = cleanUp(s)
    const newStr = s.toString()
   
    let left = 0
    let right = newStr.length - 1

    while (left < right) {
        if(newStr[left] !== newStr[right]) return false
        
        left++
        right--
    }
    return true
}

const cleanUp = (s) => {
    const validChar = 'abcdefghijklmnopqrstuvwxyz1234567890'

    let newStr = ''
    for (let index = 0; index < s.length; index++) {
        const element = s[index].toLowerCase();

        if(validChar.indexOf(element) !== -1) {
            newStr += element
        }
        
    }
    return newStr
}
// console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('nitni'))
console.log(isPalindrome(1213213211))






const isPalindrome2 = (s) => {

}

console.log(isPalindrome2(121))