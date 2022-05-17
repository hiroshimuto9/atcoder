export const B_230 = (input: string) => {
  const S = input.trim();
  const T = 'oxx'.repeat(10 ** 5)
  console.log(T.indexOf(S) > -1 ? 'Yes' : 'No');
}