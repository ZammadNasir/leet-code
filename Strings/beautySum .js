// 1781

var beautySum = function (s) {
  let n = s.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < n; j++) {
      let index = s[j].charCodeAt(0) - 97;
      freq[index]++;

      let maxFreq = 0;
      let minFreq = Infinity;

      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          maxFreq = Math.max(maxFreq, freq[k]);
          minFreq = Math.min(minFreq, freq[k]);
        }
      }

      total += maxFreq - minFreq;
    }
  }

  return total;
};
