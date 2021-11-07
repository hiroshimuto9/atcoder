export const B_185 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M, T] = [...inputVal[0].split(' ').map(Number)]
  let remain = N;
  let last = 0;
  for (let i = 0; i < M; i++) {
    const [A, B] = [...inputVal[i + 1].split(' ').map(Number)];

    remain = Math.max(0, remain - (A - last));
    if (remain === 0) {
      return console.log("No");
    }

    remain = Math.min(N, remain + (B - A));
    last = B;
  }
  return console.log(Math.max(0, remain - (T - last)) > 0 ? "Yes" : "No");
}