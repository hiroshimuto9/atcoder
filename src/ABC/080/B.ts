export const B_080 = (input: string) => {
  const N = input.trim()
  const nSum = N.split('').map(Number).reduce((p,c) => p + c);
  console.log(+N % nSum === 0 ? 'Yes' : 'No')
}