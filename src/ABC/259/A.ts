export const A_259 = (input: string) => {
  const [N, M, X, T, D] = [...input.trim().split(' ').map(Number)]
  if (M >= X) {
    console.log(T);
  } else {
    for (let i = 0; i < X; i++) {
      if (i === M) {
        const birth = T - X * D;
        console.log(i * D + birth);
        break;
      }
    }
  }
}
