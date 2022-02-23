export const B_053 = (input: string) => {
  const s = input.trim();
  const start = s.indexOf('A')
  const end = s.lastIndexOf('Z')
  console.log(end-start+1)
}