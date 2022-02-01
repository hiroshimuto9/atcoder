export const A_078 = (input: string) => {
  const [X, Y] = [...input.trim().split(' ')]
  console.log(X === Y ? "=" : X < Y ? "<" : ">")
}