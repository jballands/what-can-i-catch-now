import React, { createContext, useState, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';

type TimeContext = {
	timeSlice: Dayjs;
	setTimeSlice: (date: Dayjs) => void;
};

const TimeContext = createContext<TimeContext | null>(null);

export function TimeProvider(props: { [_: string]: any }) {
	const [timeSlice, setTimeSlice] = useState(dayjs());

	// setInterval(() => {
	// 	console.log('executing');
	// 	const newTime = dayjs();

	// 	// Take into account that the user could have changed the time
	// 	const diff = timeSlice.diff(newTime, 's');

	// 	console.dir(diff);

	// 	if (diff >= 30) {
	// 		setTimeSlice(newTime.add(diff, 's'));
	// 	} else {
	// 		setTimeSlice(newTime);
	// 	}
	// }, 30000);

	const value = {
		timeSlice,
		setTimeSlice,
	};

	return <TimeContext.Provider value={value} {...props} />;
}

export function useTime() {
	const context = useContext(TimeContext);

	if (!context) {
		throw new Error('useTime must be used within a TimeProvider!');
	}

	return context;
}
