import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useTable, useSortBy } from 'react-table';
import { useHemisphere } from '../HemisphereContext';
import { useTime } from '../TimeContext';
import CritterTable from './CritterTable';
import CritterImg from './CritterImg';
import { Text } from '../SS';

const fishQuery = gql`
	query FetchFish($hemisphere: String!, $time: Int, $month: Int) {
		Fish(time: $time, month: $month, hemisphere: $hemisphere) {
			name
			cost
			location
			image
			size
		}
	}
`;

function Fish() {
	const { hemisphere } = useHemisphere();
	const { timeSlice } = useTime();

	const { data, loading, error } = useQuery(fishQuery, {
		variables: {
			hemisphere,
			time: timeSlice.hour(),
			// temp fix
			month: timeSlice.month() + 1,
		},
	});

	const columns = useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: '',
				id: 'image',
				Cell: ({ row }: { row: any }) => {
					return (
						<CritterImg alt={row.original.name} src={row.original.image} />
					);
				},
			},
			{
				Header: 'Cost',
				accessor: 'cost',
			},
			{
				Header: 'Location',
				accessor: 'location',
			},
			{
				Header: 'Size',
				accessor: 'size',
			},
		],
		[],
	);

	const table = useTable(
		{
			columns,
			data: data?.Fish ?? [],
		},
		useSortBy,
	);

	if (loading) {
		return (
			<Text fontStyle="italic" my={3}>
				Looking for fish you can catch right now...
			</Text>
		);
	}
	if (error) {
		console.error(error);
		return <Text my={3}>Error :(</Text>;
	}

	return <CritterTable table={table} />;
}

export default Fish;
