export const A_087 = (input: string) => {
  const [X, A, B] = [...input.trim().split('\n').map(Number)];
  const tmp = X - A
  const balance = tmp - (Math.floor(tmp / B)) * B;
  console.log(balance);
}