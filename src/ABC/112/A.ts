export const A_112 = (input: string) => {
  const [N, ...AB] = [...input.trim().split('\n').map(Number)];
  if (N === 1) {
    return console.log('Hello World')
  } else {
    return console.log(AB.reduce((p,c) => p+c));
  }
}