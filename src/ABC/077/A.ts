export const A_077 = (input: string) => {
  const [X, Y] = [...input.trim().split('\n')]
  const reversedY = Y.split('').reverse().join('');
  console.log(X===reversedY ? 'YES': 'NO')
}