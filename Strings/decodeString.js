// 394

function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = "";

    for (let char of s) {
        if (!isNaN(char)) {
            // Build the full number (handles cases like 12[a])
            currentNum = currentNum * 10 + Number(char);
        } 
        else if (char === "[") {
            // Push current state to stack
            stack.push(currentStr);
            stack.push(currentNum);
            // Reset for new bracket
            currentStr = "";
            currentNum = 0;
        } 
        else if (char === "]") {
            // Pop number and previous string
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } 
        else {
            // Normal character
            currentStr += char;
        }
    }

    return currentStr;
}

console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))