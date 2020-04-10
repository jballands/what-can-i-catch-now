import bugs from './data/bugs.json';
import fishes from './data/fish.json';

type BugsArgs = {
	hemisphere: string;
	time?: number;
	month?: number;
};

type FishArgs = {
	hemisphere: string;
	time?: number;
	month?: number;
};

const queries = {
	Query: {
		Bugs: (parent: never, args: BugsArgs) => {
			return bugs
				.filter((bug) => {
					const isInHemisphere = bug.hemisphere === args.hemisphere;
					const hasTime = bug.times.indexOf(args.time) > -1;
					const hasMonth = bug.months.indexOf(args.month) > -1;

					let result = isInHemisphere;
					if (args.time) {
						result = result && hasTime;
					}
					if (args.month) {
						result = result && hasMonth;
					}

					return result;
				})
				.sort((a, b) => b.cost - a.cost);
		},
		Fish: (parent: never, args: FishArgs) => {
			return fishes
				.filter((fish) => {
					const isInHemisphere = fish.hemisphere === args.hemisphere;
					const hasTime = fish.times.indexOf(args.time) > -1;
					const hasMonth = fish.months.indexOf(args.month) > -1;

					let result = isInHemisphere;
					if (args.time) {
						result = result && hasTime;
					}
					if (args.month) {
						result = result && hasMonth;
					}

					return result;
				})
				.sort((a, b) => b.cost - a.cost);
		},
	},
};

export default queries;
