export const A_131 = (input: string) => {
  const inputVal = [...input.trim().split('').map(Number)];
  console.log(
    inputVal[0] === inputVal[1] || inputVal[1] === inputVal[2] || inputVal[2] === inputVal[3]
    ? 'Bad'
    : 'Good');
}