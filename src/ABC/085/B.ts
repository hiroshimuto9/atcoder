export const B_085 = (input: string) => {
  const [N, ...dList] = [...input.trim().split('\n').map(Number)];
  console.log(new Set(dList).size);
}