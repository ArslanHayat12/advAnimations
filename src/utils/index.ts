export const makeAnglesForCircularList = (difference: number, length: number) => {
	return [
		...Array(3)
			.fill(0)
			.map((x, y) => (x + y) * difference),
		...Array(length - 3).fill(90),
	];
};
