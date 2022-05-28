export const A_236 = (input: string) => {
  const [S, ab] = [...input.trim().split('\n')]
  const [a, b] = [...ab.split(' ')]
  const output = `${S.slice(0, +a-1)}${S.slice(+b-1, +b)}${S.slice(+a, +b-1)}${S.slice(+a-1, +a)}${S.slice(+b)}`
  console.log(output);
}