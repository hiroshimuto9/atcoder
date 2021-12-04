export const B_150 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const S = inputVal[1];
  const count = ( S.match( /ABC/g ) || [] ).length ;
  console.log(count);
}