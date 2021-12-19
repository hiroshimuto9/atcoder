export const B_126 = (input: string) => {
  const S = input.trim();
  const first = Number(S[0] + S[1]);
  const second = Number(S[2] + S[3]);
  if (isPossibleMonth(first) && isPossibleMonth(second)) {
    console.log("AMBIGUOUS");
  } else if (isPossibleMonth(first)) {
    console.log("MMYY");
  } else if (isPossibleMonth(second)) {
    console.log("YYMM");
  } else {
    console.log("NA");
  }
}

export const isPossibleMonth = (num: number) => {
  return 1 <= num && num <= 12;
};