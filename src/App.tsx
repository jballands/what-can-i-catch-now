import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloProvider,
} from '@apollo/client';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Flex, Box, Text } from './SS';
import { HemisphereProvider } from './HemisphereContext';
import Controls from './Controls';
import Critters from './Critters';

const WebsiteLink = styled(Text)`
	&:hover {
		color: #e5dbb7;
	}
`;

const theme = {
	breakpoints: ['735px', '1069px'],
	colors: {
		brown0: '#fff9e3',
		brown1: '#e5dbb7',
		brown2: '#d6cea7',
		brown3: '#c7bf99',
		brown4: '#807056',
		teal0: '#4de2da',
		teal1: '#0ec4b6',
		teal2: '#01b0a7',
		white: '#fff',
	},
};

const GlobalStyles = createGlobalStyle`
	body {
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
		lineHeight: 12px;
	}
`;

function App() {
	const uri =
		process.env.NODE_ENV === 'development'
			? '/api/graphql'
			: 'https://ac-critter-api.now.sh/api/graphql';

	console.dir(uri);

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({ uri }),
	});

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<HemisphereProvider>
					<GlobalStyles />
					<Box
						bg="brown0"
						color="brown4"
						minHeight="calc(100vh - 75px - 60px)"
						py="50px"
					>
						<Box width="87.5%" mx="auto">
							<Flex flexDirection="column">
								<Controls />
								<Critters />
							</Flex>
						</Box>
					</Box>
					<Flex
						bg="brown4"
						height="75px"
						alignItems="center"
						justifyContent="center"
					>
						<a
							href="https://jonathanballands.me"
							style={{ textDecoration: 'none' }}
						>
							<WebsiteLink color="brown0">
								© {new Date().getFullYear()} Jon Ballands
							</WebsiteLink>
						</a>
					</Flex>
				</HemisphereProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
