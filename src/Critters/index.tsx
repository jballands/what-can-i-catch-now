import React from 'react';
import { Flex, Grid, Text } from '../SS';
import Fish from './Fish';
import Bugs from './Bugs';

function Critters() {
	return (
		<Grid
			bg="brown1"
			gridTemplateColumns={['100%', '100%', '1fr 1fr']}
			gridTemplateRows={['1fr auto', '1fr auto', '100%']}
			gridColumnGap="10px"
			gridRowGap="10px"
			borderRadius="18px"
			minHeight="50vh"
			pt={3}
			pb={[1, 3, 3]}
			px={[1, 3, 3]}
			fontSize={['0.85rem', '1rem', '1rem']}
		>
			<Flex flexDirection="column" alignItems="center">
				<Text fontSize="2rem" fontWeight="600" pb={3}>
					Fish
				</Text>
				<Fish />
			</Flex>

			<Flex flexDirection="column" alignItems="center">
				<Text fontSize="2rem" fontWeight="600" pb={3}>
					Bugs
				</Text>
				<Bugs />
			</Flex>
		</Grid>
	);
}

export default Critters;
