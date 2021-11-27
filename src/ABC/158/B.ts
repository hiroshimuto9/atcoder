export const B_158 = (input: string) => {
  const inputVal = input.trim().split(' ').map(BigInt);
  const [N, A, B] = [...inputVal];
  const remain = N % (A + B);
  const output = ((N / (A + B)) * A + (remain > A ? A : remain)).toString();
  console.log(output);
}