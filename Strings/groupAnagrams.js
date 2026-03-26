// 49

const groupAnagrams = (strs) => {
  const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const item = strs[i];
        const sorted = item.split('').sort().join('')
        if(map.has(sorted)) {
            map.get(sorted).push(item)
        } else {
            map.set(sorted, [item])
        }
    }

    return Array.from(map.values())
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))