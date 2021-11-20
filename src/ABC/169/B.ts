export const B_169 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const numList = [...inputVal[1].split(' ').map(BigInt)];
  const MAX = BigInt(10) ** BigInt(18);
  let ans = 1n;
  if (numList.includes(0n)) {
    return console.log(0);
  } else {
    for (let i = 0; i < N; i++) {
      ans *= numList[i]
      if (ans > MAX) break
    }
    console.log(ans > MAX ? -1 : ans.toString())
  }
}