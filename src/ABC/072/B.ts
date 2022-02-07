export const B_072 = (input: string) => {
  const s = input.trim()
  const output = s.split('').map((v, i) => {
    if (i % 2 === 0) return v
  }).join('')
  console.log(output)
}