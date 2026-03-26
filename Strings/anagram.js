const isAnagram = (a, b) => {
  if (a.length !== b.length) return false;
  const map = {};
  for (let i = 0; i < a.length; i++) {
    const item = a[i];
    map[item] = (map[item] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    const element = b[i];
    if (!map[element]) return false;

    map[element] -= 1;
  }

  return true;
};

console.log(isAnagram("hello", "lloee"));
