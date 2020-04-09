import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Flex, Text } from './SS';
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

	border-radius: 50px;
	background: ${(p) => (p.selected ? '#6faa40' : '#0ec4b6')};
	padding: 15px;
	color: #fff;
	border: 5px solid ${(p) => (p.selected ? '#8bd739' : '#4de2da')};
	font-weight: 600;
	font-size: 1.2rem;
	margin: 0 3px;
	outline: none;

	&:hover {
		cursor: pointer;
		border: 5px solid #4de2da;
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
			mb={4}
		>
			<Text fontSize="2rem" fontWeight="600" mb={4}>
				What critters can I catch?
			</Text>

			<Flex
				fontSize="1.2rem"
				flexDirection="row"
				flexWrap="wrap"
				lineHeight="2rem"
				alignItems="center"
				justifyContent="center"
				mb={3}
			>
				<Text mr={2}>My island is in the</Text>
				<Button
					selected={hemisphere === Hemisphere.North}
					onClick={() => setHemisphere(Hemisphere.North)}
				>
					Northern
				</Button>
				<Button
					selected={hemisphere === Hemisphere.South}
					onClick={() => setHemisphere(Hemisphere.South)}
				>
					Southern
				</Button>
				<Text ml={2}>
					hemisphere. It's {dayjs().format('dddd MMMM D, h:mmA')}.
				</Text>
			</Flex>
		</Flex>
	);
}

export default Controls;
