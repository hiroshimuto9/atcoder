export const A_025 = (input: string) => {
  const [S, N] = [...input.trim().split('\n')]
  const n = Number(N)

  const sList = S.split('')
  const res = []
  for (let i = 0; i < sList.length; i++) {
    const row = sList.map(s => `${sList[i]}${s}`)
    res.push(...row)
  }
  console.log(res[n - 1])
}