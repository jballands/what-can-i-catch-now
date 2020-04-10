import React from 'react';
import { Box } from '../SS';

interface CritterImg {
	src: string;
	alt: string;
}

function CritterImg({ src, alt }: CritterImg) {
	return (
		<Box width={['40px', '60px', '60px']}>
			<img src={src} alt={alt} style={{ width: '100%' }} />
		</Box>
	);
}

export default CritterImg;
