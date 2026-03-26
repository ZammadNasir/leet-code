// 3541

const maxFreqSum = (s) => {

    const vowelSet = new Set("aeiou")

    let vowelMax = {}
    let consonantsMax = {}

    for(word of s) {
        if(vowelSet.has(word)) {
            vowelMax[word] = (vowelMax[word] || 0) + 1
        } else {
            consonantsMax[word] = (consonantsMax[word] || 0) + 1
        }
    }

    return Math.max(0, ...Object.values(vowelMax)) + Math.max(0, ...Object.values(consonantsMax))
}

console.log(maxFreqSum("successes"))
console.log(maxFreqSum("aeiaeia"))