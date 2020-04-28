import React from 'react';
import { Flex, Grid, Text } from '../../SS';
import { useTime } from '../../TimeContext';
import DateTimePickerToggle from './DateTimePickerToggle';

function DateTimePicker() {
	const { timeSlice, setTimeSlice } = useTime();
	const month = timeSlice.format('MMMM');
	const day = timeSlice.format('D');
	const time = timeSlice.format('h:mm a');

	const subtractMonth = () => setTimeSlice(timeSlice.subtract(1, 'month'));

	const addMonth = () => setTimeSlice(timeSlice.add(1, 'month'));

	const subtractDay = () => setTimeSlice(timeSlice.subtract(1, 'day'));

	const addDay = () => setTimeSlice(timeSlice.add(1, 'day'));

	const subtractHour = () => setTimeSlice(timeSlice.subtract(1, 'hour'));

	const addHour = () => setTimeSlice(timeSlice.add(1, 'hour'));

	return (
		<Flex
			p={3}
			borderRadius="50px"
			border="4px solid"
			borderColor="brown3"
			bg="brown1"
			flexDirection="column"
			alignItems="center"
		>
			<Text mb={2}>It's currently:</Text>

			<Grid gridTemplateColumns="115px 30px 110px" gridColumnGap="5px">
				<DateTimePickerToggle
					value={month}
					onUp={addMonth}
					onDown={subtractMonth}
				/>
				<DateTimePickerToggle value={day} onUp={addDay} onDown={subtractDay} />
				<DateTimePickerToggle
					value={time}
					onUp={addHour}
					onDown={subtractHour}
				/>
			</Grid>
		</Flex>
	);
}

export default DateTimePicker;
