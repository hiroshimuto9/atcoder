export const A_132 = (input: string) => {
  const SList = input.trim().split('');
  const output = SList.every(char => SList.filter(c => c === char).length === 2);
  console.log(output ? 'Yes' : 'No')
}