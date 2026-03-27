let count = 0;

export const counterService = {
	getCount() {
		return count;
	},
	increment() {
		count += 1;
		return count;
	},
};
