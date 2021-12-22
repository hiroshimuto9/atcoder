export const B_123 = (input: string) => {
  const inputVal = [...input.trim().split('\n').map(Number)];
  let total = 0;
  let maxWaitTime = 0;
  inputVal.forEach(time => {
    const canOrderTime = Math.ceil(time / 10) * 10;
    total += canOrderTime;
    maxWaitTime = Math.max(maxWaitTime, canOrderTime - time);
  })
  console.log(total - maxWaitTime);
}