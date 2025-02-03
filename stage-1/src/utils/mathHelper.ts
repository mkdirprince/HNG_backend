const isEven = (n: number) => {
	return n % 2 === 0;
};

const isPrime = (n: number) => {
	if (n <= 1) return false;
	if (n <= 3) return true;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
};

const digitSum = (n: number) => {
	let sum = 0;
	while (n > 0) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}
	return sum;
};

const isArmstrong = (n: number) => {
	const digits = n.toString().split("").map(Number);
	const power = digits.length;
	const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
	return sum === n;
};

const isPerfect = (n: number) => {
	if (n <= 1) {
		return false;
	}

	let sum_divisors = 1;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			sum_divisors += i;

			if (i !== n / i) {
				sum_divisors += n / i;
			}
		}
	}

	return sum_divisors === n;
};

export default {
	isArmstrong,
	isEven,
	isPrime,
	isPerfect,
	digitSum,
};
