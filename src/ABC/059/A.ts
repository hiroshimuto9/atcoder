export const A_059 = (input: string) => {
  const [s1, s2, s3] = [...input.trim().split(' ')]
  const output = (s1[0]+s2[0]+s3[0]).toUpperCase();
  console.log(output);
}