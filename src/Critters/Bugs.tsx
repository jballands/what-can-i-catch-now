import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import dayjs from 'dayjs';
import { useTable } from 'react-table';
import { useHemisphere } from '../HemisphereContext';
import CritterTable from './CritterTable';
import CritterImg from './CritterImg';
import { Text } from '../SS';

const bugQuery = gql`
	query FetchBugs($hemisphere: String!, $time: Int, $month: Int) {
		Bugs(time: $time, month: $month, hemisphere: $hemisphere) {
			name
			cost
			location
			image
		}
	}
`;

function Bugs() {
	const now = dayjs();
	const time = now.hour();
	const month = now.month() + 1;

	const { hemisphere } = useHemisphere();

	const { data, loading } = useQuery(bugQuery, {
		variables: {
			hemisphere,
			time,
			month,
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
		],
		[],
	);

	const table = useTable({
		columns,
		data: data?.Bugs ?? [],
	});

	if (loading) {
		return <Text>Loading...</Text>;
	}

	return <CritterTable table={table} />;
}

export default Bugs;
