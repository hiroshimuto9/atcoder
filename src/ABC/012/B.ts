export const B_012 = (input: string) => {
  const N = +input.trim();
  const h = Math.floor(N / (60 * 60));
	const m = Math.floor((N / 60) % 60);
	const s = Math.floor(N % 60);
	console.log(pad(h) + ':' + pad(m) + ':' + pad(s));
}

export const pad = (n: number): string => {
  return ('00' + n).slice(-2);
}