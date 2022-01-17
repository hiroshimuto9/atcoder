export const A_093 = (input: string) => {
  const sList = [...input.trim().split('')];
  console.log(new Set(sList).size === 3 ? 'Yes' : 'No');
}