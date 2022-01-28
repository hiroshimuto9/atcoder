export const B_082 = (input: string) => {
  const [s, t] = [...input.trim().split('\n')];
  const s2 = s.split('').sort().join('');
  const t2 = t.split('').sort().reverse().join('')
  console.log(s2 < t2 ? 'Yes' : 'No')
}