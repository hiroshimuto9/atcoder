export const B_237 = (input: string) => {
  const tmp = input.trim().split("\n")
  const array = tmp.slice(1).map(str => str.split(' '))
  const output = array[0].map((_, c) => {
    return array.map(r => r[c])
  })
  output.map(array => {
    console.log(array.join(' '))
  })
}
