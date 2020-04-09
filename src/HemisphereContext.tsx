import React, { createContext, useState, useContext } from 'react';
import { Hemisphere } from './types';

type HemisphereContext = {
	hemisphere: Hemisphere;
	setHemisphere: (h: Hemisphere) => void;
};

const HemisphereContext = createContext<HemisphereContext | null>(null);

export function HemisphereProvider(props: { [_: string]: any }) {
	const [hemisphere, setHemisphere] = useState(Hemisphere.North);

	const value = {
		hemisphere,
		setHemisphere,
	};

	return <HemisphereContext.Provider value={value} {...props} />;
}

export function useHemisphere() {
	const context = useContext(HemisphereContext);

	if (!context) {
		throw new Error('useHemisphere must be used within a HemisphereProvider!');
	}

	return context;
}
