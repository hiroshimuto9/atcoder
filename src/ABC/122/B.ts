export const B_122 = (input: string) => {
  const textList = input.split(/[^ACGT]+/g);
  console.log(Math.max(...textList.map(text => text.length)))
}