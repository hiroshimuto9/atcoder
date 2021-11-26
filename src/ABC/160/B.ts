export const B_160 = (input: string) => {
  let inputVal = +input.trim();
  let fiveH = 0;
  let five = 0;
  if (inputVal < 5) return console.log(0);
  if (inputVal >= 500) {
    fiveH = Math.floor(inputVal / 500);
    five = Math.floor((inputVal - (500 * fiveH)) / 5);
  } else {
    five = Math.floor((inputVal - (500 * Math.floor(inputVal / 500))) / 5);
  }
  const total = fiveH * 1000 + five * 5;
  console.log(total);
}