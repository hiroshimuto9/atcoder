export const A_032 = (input: string) => {
  const [a, b, n] = [...input.trim().split('\n').map(Number)];
  for (let i = n; i <= a*b*n; i++) {
    if (i % a == 0 && i % b == 0) {
        console.log(i);
        break;
    }
  }
}