export const B_206 = (input: string) => {
  const inputVal = input.trim();
  const N = +inputVal;
  let day = 0;
  let money = 0;
  while(true) {
    day++
    money +=  day;
    if (money >= N) {
      return console.log(day);
    }
  }
}