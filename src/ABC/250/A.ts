export const A_250 = (input: string) => {
  const [HW, RC] = [...input.trim().split('\n')];
  const [H, W] = [...HW.split(' ').map(Number)]
  const [R, C] = [...RC.split(' ').map(Number)]
  let total = 0;
  if(C != 1){ total++; }
  if(C != W){ total++; }
  if(R != 1){ total++; }
  if(R != H){ total++; }
  console.log(total);
}
