export const B_192 = (input: string) => {
  const inputVal = input.trim();
  const S = [...inputVal];

  const notReadable = S.some((st, index) => {
    if (index % 2 === 0 && st === st.toUpperCase()) return true;
    if (index % 2 === 1 && st !== st.toUpperCase()) return true;
    return false;
  })

  console.log(notReadable ? 'No' : 'Yes');
}
