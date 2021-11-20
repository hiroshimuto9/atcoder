export const B_168 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const K = +inputVal[0];
  const S = inputVal[1];
  if (S.length <= K) {
    return console.log(S);
  } else {
    const output = `${S.slice(0, K)}...`;
    return console.log(output);
  }
}