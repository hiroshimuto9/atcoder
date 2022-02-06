export const B_073 = (input: string) => {
  const [N, ...seat] = [...input.trim().split('\n')]
  let total = 0;
  for(let i = 0; i < +N; i++) {
    const p = Math.abs(seat[i].split(' ').map(Number).reduce((p,c) => p - c)) + 1
    total += p
  }
  console.log(total)
}