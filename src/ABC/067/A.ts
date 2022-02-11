export const A_067 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)]
  const flg = A % 3 === 0 || B % 3 === 0 || (A+B) % 3 === 0;
  console.log(flg ? 'Possible' : 'Impossible')
}