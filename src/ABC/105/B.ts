export const B_105 = (input: string) => {
  const N = +input.trim();
  var result = 'No';
  for(let i = 0;i <= N; i += 4) {
    if((N-i)%7 === 0){
      result='Yes';
      break;
    }
  }
  console.log(result);
}