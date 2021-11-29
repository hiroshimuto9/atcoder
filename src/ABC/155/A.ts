export const A_155 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const uniqueNumList = new Set(inputVal);
  console.log(uniqueNumList.size === 2 ? 'Yes': 'No');
}