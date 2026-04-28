// 767

var reorganizeString = function(s) {
    const freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let arr = Object.entries(freq);

    let result = "";

while (arr.length > 1) {
    arr.sort((a, b) => b[1] - a[1]);

    let [ch1, count1] = arr[0];
    let [ch2, count2] = arr[1];

    result += ch1;
    result += ch2;

    arr[0][1]--;
    arr[1][1]--;

    arr = arr.filter(([ch, count]) => count > 0);
}

    if (arr.length === 1) {
        let [ch, count] = arr[0];
        if (count > 1) return "";
        result += ch;
    }

    return result;
};


console.log(reorganizeString("aab"))
console.log(reorganizeString("aaab"))