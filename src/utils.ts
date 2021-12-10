export function getRandom<T>(
  array: Array<T>,
  n: number,
  excludedInArray: Array<T> = new Array<T>()
): Array<T> {
  let newArray = array.filter((a) => !excludedInArray.includes(a));
  let result = new Array(n);
  let len = newArray.length;
  let taken = new Array(len);
  if (n > len) {
    throw new RangeError("getRandom: more elements taken than available");
  }
  while (n--) {
    const index = Math.floor(Math.random() * len);
    result[n] = newArray[index in taken ? taken[index] : index];
    taken[index] = --len in taken ? taken[len] : len;
  }
  return result;
}
