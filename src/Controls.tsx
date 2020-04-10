import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Box, Grid, Flex, Text } from './SS';
import { useHemisphere } from './HemisphereContext';
import { Hemisphere } from './types';

interface ButtonProps {
	selected: boolean;
}

const Button = styled.button<ButtonProps>`
	@keyframes barbershopPole {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -58px 0px;
		}
	}

	${(p) =>
		p.selected
			? `
		border: 4px solid #4de2da;
		background-size: 150% 100%;
		background-image: repeating-linear-gradient(
			-45deg,
			#0ec4b6,
			#0ec4b6 10px,
			#01b0a7 10px,
			#01b0a7 20px
		);
		animation: barbershopPole 3s linear infinite;
	`
			: `
		background: #0ec4b6;
		border: 4px solid #4de2da;
	}`}

	border-radius: 50px;
	color: #fff;
	font-weight: 600;
	font-size: 1.2rem;
	margin: 0 3px;
	outline: none;

	&:hover {
		cursor: pointer;
		border: 4px solid #4de2da;
		background-size: 150% 100%;
		background-image: repeating-linear-gradient(
			-45deg,
			#0ec4b6,
			#0ec4b6 10px,
			#01b0a7 10px,
			#01b0a7 20px
		);
		animation: barbershopPole 3s linear infinite;
	}
`;

function Controls() {
	const { hemisphere, setHemisphere } = useHemisphere();

	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			mb={[2, 4, 4]}
		>
			<Grid
				fontSize="1.2rem"
				lineHeight="2rem"
				alignItems="center"
				justifyItems="center"
				gridTemplateColumns={['1fr', '1fr', 'auto auto auto']}
				gridTemplateRows={['auto auto auto', 'auto auto auto', '1fr']}
				gridColumnGap="5px"
				mb={3}
			>
				<Text textAlign="center">My island is in the</Text>
				<Box>
					<Button
						selected={hemisphere === Hemisphere.North}
						onClick={() => setHemisphere(Hemisphere.North)}
					>
						<Box p={[2, 3, 3]}>Northern</Box>
					</Button>
					<Button
						selected={hemisphere === Hemisphere.South}
						onClick={() => setHemisphere(Hemisphere.South)}
					>
						<Box p={[2, 3, 3]}>Southern</Box>
					</Button>
				</Box>
				<Text textAlign="center">
					hemisphere. It's {dayjs().format('dddd MMMM D, h:mmA')}.
				</Text>
			</Grid>
		</Flex>
	);
}

export default Controls;
