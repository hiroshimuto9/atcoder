export const B_062 = (input: string) => {
  const [HW, ...aList] = [...input.trim().split('\n')]
  const [H, W] = [...HW.split(' ').map(Number)]
  const result = [
    "#".repeat(W + 2),
    ...aList.map((a) => `#${a}#`),
    "#".repeat(W + 2),
  ].join("\n");
  console.log(result)
}