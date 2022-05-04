export const A_223 = (input: string) => {
  const N = +input.trim();
  console.log(N%100===0 && N !== 0 ? 'Yes' : 'No');
}