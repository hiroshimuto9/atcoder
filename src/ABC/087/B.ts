export const B_087 = (input: string) => {
  const [A, B, C, X] = [...input.trim().split('\n').map(Number)];
  let count: number = 0
  for (let i = 0; i <= A; i ++) {
    for (let j = 0; j <= B; j++) {
      for (let k = 0; k <= C; k++) {
        let result: number = 500 * i + 100 * j + 50 * k
        if (result === X) count ++
      }
    }
  }
  console.log(count)
}