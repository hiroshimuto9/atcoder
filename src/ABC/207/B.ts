export const B_207 = (input: string) => {
  const inputVal = input.trim().split(' ').map(tmp => +tmp);
  const [initialBlue, addBlue, red, double] = [...inputVal];
  if (addBlue >= red * double) return console.log(-1);
  // 容器内の水色ボールの数
  let totalBlue = initialBlue;
  // 容器内の赤色ボールの数
  let totalRed = 0;
  // 操作数
  let count = 0;
  while(true) {
    count++;
    totalBlue += addBlue;
    totalRed += red;
    if(totalBlue <= totalRed * double) {
      console.log(count);
      return
    }
  }
}