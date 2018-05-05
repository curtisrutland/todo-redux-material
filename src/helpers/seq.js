export const range = (start, end) => {
  const len = end - start + 1;
  return [...Array(len).keys()].map(i => i + start);
}