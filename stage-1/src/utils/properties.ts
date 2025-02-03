export const properties = (isArmstrong: boolean, isEven: boolean) => {
	const res = [];

	if (isArmstrong) {
		res.push("armstrong");
	}

	if (!isEven) {
		res.push("odd");
	}

	if (isEven) {
		res.push("even");
	}

	return res;
};
