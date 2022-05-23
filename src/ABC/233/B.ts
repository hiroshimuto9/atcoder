export const B_233 = (input: string) => {
  const [LR, S] = [...input.trim().split('\n')];
  const [L, R] = [...LR.split(' ').map(Number)]
  const reversedS: string = S.substring(L-1, R).split('').reverse().join('');
  const output: string = S.substring(0, L-1) + reversedS + S.substring(R, S.length);
  console.log(output);
}