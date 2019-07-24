export function pickRandomCards (arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, n);
  let value = (n === 1) ? selected[0] : selected;
  return value;
}
