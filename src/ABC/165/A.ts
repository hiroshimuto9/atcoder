export const A_165 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const K = +inputVal[0];
  const [A, B] = inputVal[1].split(' ').map(Number);
  let result = false;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) result = true;
  }
  console.log(result ? 'OK' : 'NG')
}