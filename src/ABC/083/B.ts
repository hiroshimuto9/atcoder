export const B_083 = (input: string) => {
  const [N, A, B] = [...input.trim().split(' ').map(Number)];
  let numList = [];
  for (let i = 1; i <= N; i++) {
    const sum = [...i.toString().split('').map(Number)].reduce((p,c) => p+c, 0);
    if (sum >= A && sum <= B) {
      numList.push(i);
    }
  }
  console.log(numList.reduce((p,c) => p+c, 0))
}