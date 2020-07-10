import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useTable, useSortBy } from 'react-table';
import { useHemisphere } from '../HemisphereContext';
import { useTime } from '../TimeContext';
import CritterTable from './CritterTable';
import CritterImg from './CritterImg';
import { Text } from '../SS';

const seaQuery = gql`
	query FetchSeaLife($hemisphere: String!, $time: Int, $month: Int) {
		Sea(time: $time, month: $month, hemisphere: $hemisphere) {
			name
			cost
			image
		}
	}
`;

function Sea() {
	const { hemisphere } = useHemisphere();
	const { timeSlice } = useTime();

	const { data, loading, error } = useQuery(seaQuery, {
		variables: {
			hemisphere,
			time: timeSlice.hour(),
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
		],
		[],
	);

	const table = useTable(
		{
			columns,
			data: data?.Sea ?? [],
		},
		useSortBy,
	);

	if (loading) {
		return (
			<Text fontStyle="italic" my={3}>
				Looking for sea creatures you can catch right now...
			</Text>
		);
	}
	if (error) {
		console.error(error);
		return <Text my={3}>Error :(</Text>;
	}

	return <CritterTable table={table} />;
}

export default Sea;
