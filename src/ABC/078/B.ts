export const B_078 = (input: string) => {
  const [X, Y, Z] = [...input.trim().split(' ').map(Number)]
  console.log(Math.floor((X-Z)/(Y+Z)))
}