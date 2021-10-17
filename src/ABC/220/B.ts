export const B_220 = (input: string) => {
  let tmp = input.trim().split('\n')
  const k = +tmp[0]
  const [a, b] = tmp[1].split(" ").map((x) => parseInt(x, k))
  return console.log(a * b);
}