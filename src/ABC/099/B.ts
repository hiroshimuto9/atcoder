export const B_099 = (input: string) => {
  const [a, b] = [...input.trim().split(' ').map(Number)];
  const diff = b - a
	let sum = 0;
	for (let i = 1; i <= diff; i++) {
		sum += i
	}
	console.log(sum - b);
}