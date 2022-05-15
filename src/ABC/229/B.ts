export const B_229 = (input: string) => {
  const [A, B] = [...input.trim().split(' ')];
  const Astr = A.split("").reverse().join("");
  const Bstr = B.split("").reverse().join("");
  const shorter = Astr.length < Bstr.length ? A : B;
  let kuriagari = false;
  for(let i = 0; i < shorter.length; i++) {
    const sum = Number(Astr[i]) + Number(Bstr[i]);
    if(sum >= 10) {
      kuriagari = true;
      break;
    }
  }
  console.log(kuriagari ? "Hard" : "Easy");
}