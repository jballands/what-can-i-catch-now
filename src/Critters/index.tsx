import React, { useState } from 'react';
import { Box, Flex, Text } from '../SS';
import Tabs from './Tabs';
import Fish from './Fish';
import Bugs from './Bugs';
import Sea from './Sea';
import { CritterTab } from './CritterTab';

function Critters() {
	const [tab, setTab] = useState(CritterTab.Fish);

	return (
		<>
			<Tabs selectedTab={tab} onTabClicked={setTab} />
			<Box
				bg="brown1"
				borderRadius="0 18px 18px 18px"
				minHeight="50vh"
				pt={3}
				pb={[1, 3, 3]}
				px={[1, 3, 3]}
				fontSize={['0.85rem', '1rem', '1rem']}
			>
				{tab === CritterTab.Fish && <Fish />}
				{tab === CritterTab.Bugs && <Bugs />}
				{tab === CritterTab.SeaCreatures && <Sea />}
			</Box>
		</>
	);
}

export default Critters;
