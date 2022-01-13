export const A_097 = (input: string) => {
  const [a, b, c, d]= [...input.trim().split(' ').map(Number)];
  const ab = Math.abs(a-b);
  const bc = Math.abs(b-c);
  const ac = Math.abs(a-c);
  const direct = ac <= d;
  const indirect = ab <= d && bc <= d;
  console.log(direct || indirect ? 'Yes' : 'No');
}