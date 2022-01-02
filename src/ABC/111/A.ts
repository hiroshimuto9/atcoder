export const A_111 = (input: string) => {
  const n = input.trim();
  const output = n.split('').map((v: string) => {
    if (Number(v) === 1) return '9'
    else return '1'
  }).join('');
  console.log(Number(output));
}