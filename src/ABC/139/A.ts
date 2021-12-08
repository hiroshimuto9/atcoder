export const A_139 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const S = [...inputVal[0].split('')];
  const T = [...inputVal[1].split('')];
  let count = 0;
  for(let i = 0; i < 3; i++) {
    if (S[i] === T[i]) {
      count++;
    }
  }
  console.log(count);
}