export const A_017 = (input: string) => {
  const [se1, se2, se3] = [...input.trim().split('\n')];
  const [s1, e1] = [...se1.split(' ').map(Number)]
  const [s2, e2] = [...se2.split(' ').map(Number)]
  const [s3, e3] = [...se3.split(' ').map(Number)]
  const total = (s1 * e1 + s2 * e2 + s3 * e3) * 0.1
  console.log(total);
}