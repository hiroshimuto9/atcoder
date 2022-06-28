export const B_249 = (input: string) => {
  const S = input.trim();
  console.log(isPerfect(S) ? 'Yes' : 'No');
}

const ratz = /[a-z]/;
const rAtZ = /[A-Z]/;
export const isUnique = (s: string) => {
  return s.length === new Set(s).size;
}
export const isPerfect = (s: string) => {
  return ratz.test(s) && rAtZ.test(s) && isUnique(s) ;
}