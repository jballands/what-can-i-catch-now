import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '../../SS';

const Arrow = styled(Box)`
	&:hover {
		cursor: pointer;
	}
`;

const DownArrow = styled(Arrow)`
	transform: rotate(180deg);
`;

interface DateTimePickerToggleProps {
	value: string;
	onUp?: () => void;
	onDown?: () => void;
}

function DateTimePickerToggle({
	onUp,
	onDown,
	value,
}: DateTimePickerToggleProps) {
	return (
		<Flex fontSize="1.5em" flexDirection="column" alignItems="center">
			<Arrow width="25px" onClick={onUp}>
				<img src="/arrow.svg" alt="Up" />
			</Arrow>

			{value}

			<DownArrow width="25px" onClick={onDown}>
				<img src="/arrow.svg" alt="Down" />
			</DownArrow>
		</Flex>
	);
}

export default DateTimePickerToggle;
