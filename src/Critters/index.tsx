import React from 'react';
import { Box, Grid } from '../SS';
import Fish from './Fish';
import Bugs from './Bugs';

function Critters() {
	return (
		<Grid
			bg="brown1"
			gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
			gridTemplateRows={['1fr 1fr', '1fr 1fr', '1fr']}
			gridColumnGap="10px"
			gridRowGap="10px"
			borderRadius="10px"
			p={2}
		>
			<Box p={2}>
				<Fish />
			</Box>

			<Box p={2}>
				<Bugs />
			</Box>
		</Grid>
	);
}

export default Critters;
