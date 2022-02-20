export const B_058 = (input: string) => {
  const [O, E] = [...input.trim().split('\n')]
  let pass = '';
  for (let i = 0; i < O.length; i++) {
    if (E[i]) {
      pass += O[i] + E[i]
    } else {
      pass += O[i]
    }
  }
  console.log(pass)
}