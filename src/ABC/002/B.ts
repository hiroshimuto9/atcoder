export const B_002 = (input: string) => {
  const wList = input.trim().split('');
  const output = wList.map(w => {
    if (w === 'a' || w === 'i' || w === 'u' || w === 'e' || w === 'o') {
      return ''
    }
    return w
  })
  console.log(output.join(''))
}