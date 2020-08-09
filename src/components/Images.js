import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTransition, animated, config } from 'react-spring';

const useStyles = makeStyles((theme) => ({
	bg: {
		height: '300px',
		width: '100%',
		minWidth: '500px',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		willChange: 'opacity',
		borderRadius: 5,
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.down('md')]: {
			minWidth: '300px',
		},
	},
}));

export default function Images({ images }) {
	const classes = useStyles();
	const [index, set] = useState(0);
	const transitions = useTransition(images[index], (item) => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses,
	});
	useEffect(
		() =>
			void setInterval(() => set((state) => (state + 1) % images.length), 3000),
		[]
	);
	return transitions.map(({ item, props, key }) => (
		<animated.div
			key={key}
			className={classes.bg}
			style={{ backgroundImage: `url(${item.url})` }}
		/>
	));
}
