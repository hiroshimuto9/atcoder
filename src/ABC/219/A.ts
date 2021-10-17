export const A_219 = (input: string) => {
  const inputVal = +input;
  if(inputVal < 40) return console.log(40-inputVal);
  if(inputVal < 70) return console.log(70-inputVal);
  if(inputVal < 90) return console.log(90-inputVal);
  if(inputVal >= 90) return console.log('expert');
}