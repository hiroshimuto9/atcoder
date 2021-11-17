export const B_172 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const SList = [...inputVal[0]];
  const TList = [...inputVal[1]];
  let count = 0;
  for (let i = 0; i < SList.length; i++) {
    if (SList[i] !== TList[i]) {
      count++
    }
  }
  console.log(count);
}