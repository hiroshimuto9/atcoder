export const B_071 = (input: string) => {
  const sList = input.trim().split('')
  const array = "abcdefghijklmnopqrstuvwxyz".split('')
  let result = 'None'
  for (let i = 0; i < array.length; i++) {
    if (!sList.includes(array[i])) {
      result = array[i]
      break
    }
  }
  console.log(result);
}