export default function serializeArray(array: string[]) {
  let qs = "";
  array.forEach((item, i) => {
    qs += `i:${i};s:${item.length}:"${item}";`;
  });

  return `a:${array.length}:{${qs}}`;
}
