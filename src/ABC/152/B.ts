export const B_152 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [a, b] = [...inputVal];
  const A = new Array(+b).fill(a).join('');
  const B = new Array(+a).fill(b).join('');
  console.log([A, B].sort()[0])
}