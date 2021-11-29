export const B_155 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const evenNumList = [...inputVal[1].split(' ').map(Number).filter((x) => x % 2 === 0)];
  const filteredEvenNumList = evenNumList.filter(n => n % 3 === 0 || n % 5 === 0);
  console.log(evenNumList.length === filteredEvenNumList.length ? 'APPROVED' : 'DENIED')
}