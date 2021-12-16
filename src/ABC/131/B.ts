export const B_131 = (input: string) => {
  const [N, L] = [...input.trim().split(' ').map(Number)];
  let result = 0;
  let reduce = L;
  for (let i = 0; i < N; i++) {
    const taste = L + i;
    result += taste;
    if (Math.abs(taste) < Math.abs(reduce)) reduce = taste;
  }
  console.log(result - reduce);
}