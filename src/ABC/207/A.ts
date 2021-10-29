export const A_207 = (input: string) => {
  const inputVal = input.trim().split(' ').map(tmp => +tmp);
  const sortedVal = inputVal.sort((a, b) => {
    return b - a
  });
  console.log(sortedVal[0] + sortedVal[1]);
}