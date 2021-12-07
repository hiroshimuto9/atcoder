export const A_141 = (input: string) => {
  const inputVal = input.trim();
  if (inputVal === 'Sunny') return console.log('Cloudy');
  if (inputVal === 'Cloudy') return console.log('Rainy');
  if (inputVal === 'Rainy') return console.log('Sunny');
}