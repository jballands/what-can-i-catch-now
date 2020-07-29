import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from '../SS';
import { CritterTab } from './CritterTab';

const HoverBox = styled(Box)`
	&:hover {
		cursor: pointer;
	}
`;

interface TabsProps {
	selectedTab: CritterTab;
	onTabClicked: (tab: CritterTab) => void;
}

function Tabs({ selectedTab, onTabClicked }: TabsProps) {
	return (
		<Flex>
			<HoverBox
				bg={selectedTab === CritterTab.Fish ? 'brown1' : 'brown3'}
				p="15px"
				borderRadius="15px 15px 0 0"
				onClick={() => onTabClicked(CritterTab.Fish)}
			>
				<Text fontSize="1.2rem">Fish</Text>
			</HoverBox>
			<HoverBox
				bg={selectedTab === CritterTab.Bugs ? 'brown1' : 'brown3'}
				p="15px"
				mx="5px"
				borderRadius="15px 15px 0 0"
				onClick={() => onTabClicked(CritterTab.Bugs)}
			>
				<Text fontSize="1.2rem">Bugs</Text>
			</HoverBox>
			<HoverBox
				bg={selectedTab === CritterTab.SeaCreatures ? 'brown1' : 'brown3'}
				p="15px"
				borderRadius="15px 15px 0 0"
				onClick={() => onTabClicked(CritterTab.SeaCreatures)}
			>
				<Text fontSize="1.2rem">Sea Creatures</Text>
			</HoverBox>
		</Flex>
	);
}

export default Tabs;
