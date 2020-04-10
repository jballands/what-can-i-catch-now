import { gql } from 'apollo-server-micro';

const typeDefs = gql`
	type Bug {
		hemisphere: String
		name: String
		image: String
		cost: Int
		location: String
		times: [Int]
		months: [Int]
	}

	type Fish {
		hemisphere: String
		name: String
		image: String
		cost: Int
		location: String
		size: Int
		times: [Int]
		months: [Int]
	}

	type Query {
		Bugs(hemisphere: String!, time: Int, month: Int): [Bug]
		Fish(hemisphere: String!, time: Int, month: Int): [Fish]
	}
`;

export default typeDefs;
