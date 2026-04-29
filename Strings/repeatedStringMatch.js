// 686

const repeatedStringMatch = (e, t) => {
  let n = Math.ceil(t.length / e.length);
  return e.repeat(n).includes(t) ||
    e.repeat(++n).includes(t) ||
    e.repeat(++n).includes(t)
    ? n
    : -1;
};
