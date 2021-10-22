export const B_216 = (input: string) => {
  const inputVal = input.trim().split("\n");
  const [N, ...nameList] = [...inputVal];
  const nameListLength = nameList.length;
  const uniqueNameListLength = new Set(nameList).size;
  if(nameListLength !== uniqueNameListLength) return console.log('Yes');
  return console.log('No');
}