export const A_160 = (input: string) => {
  const S = [...input.trim().split('')];
  console.log(S[2] === S[3] && S[4] === S[5] ? 'Yes' : 'No');
}