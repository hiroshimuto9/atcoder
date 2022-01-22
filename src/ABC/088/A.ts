export const A_088 = (input: string) => {
  const [N, A] = [...input.trim().split('\n').map(Number)];
  const balance = N % 500;
  console.log(balance <= A ? 'Yes' : 'No');
}