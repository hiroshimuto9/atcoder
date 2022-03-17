export const A_033 = (input: string) => {
  const nList = input.trim().split('');
  console.log(new Set(nList).size === 1 ? 'SAME' : 'DIFFERENT');
}