export const B_211 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const uniqueList = new Set([...inputVal]);
  if(uniqueList.size === 4) return console.log('Yes');
  return console.log('No');
}