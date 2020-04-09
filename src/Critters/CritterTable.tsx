import React from 'react';
import { TableInstance } from 'react-table';
import styled from 'styled-components';
import { Box, Table, Th, Td } from '../SS';

const AlternatingRows = styled.tr`
	&:nth-child(odd) {
		background: #c7bf99;
	}
	&:nth-child(even) {
		background: #d6cea7;
	}
`;

interface TableProps {
	table: TableInstance;
}

function CritterTable({ table }: TableProps) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = table;

	return (
		<Box borderRadius="15px" overflow="hidden">
			<Table width="100%" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<Th
									{...column.getHeaderProps()}
									bg="brown2"
									px={3}
									py={3}
									textAlign="left"
								>
									{column.render('Header')}
								</Th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<AlternatingRows {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<Td p={3} textAlign="left" {...cell.getCellProps()}>
											{cell.render('Cell')}
										</Td>
									);
								})}
							</AlternatingRows>
						);
					})}
				</tbody>
			</Table>
		</Box>
	);
}

export default CritterTable;
