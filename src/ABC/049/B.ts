export const B_049 = (input: string) => {
  const [HW, ...cList] = input.trim().split('\n');
  let output = [];
  const H = HW.split(' ').map(Number)[0]
  for (let i = 0; i < H; i++) {
    output.push(cList[i], cList[i])
  }
  console.log(output.join('\n'));
}