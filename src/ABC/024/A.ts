export const A_024 = (input: string) => {
  const [ABCK, ST] = [...input.trim().split('\n')]
  const [A, B, C, K] = [...ABCK.split(' ').map(Number)];
  const [S, T] = [...ST.split(' ').map(Number)];
  const childM = A * S;
  const adultM = B * T;
  const totalP = S + T;
  const totalM = childM + adultM;
  console.log(totalP >= K ? totalM - (C * totalP) : totalM);
}