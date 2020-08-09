import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Brightness5 from '@material-ui/icons/Brightness5';
import Brightness4 from '@material-ui/icons/Brightness4';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: 'relative',
	},
	modeButton: {
		cursor: 'pointer',
		position: 'absolute',
		top: theme.spacing(2),
		right: theme.spacing(2),
	},
}));
export default function Mode({ mode, toggleMode }) {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} className={classes.modeButton}>
				<Tooltip title='Change mode'>
					{mode === 'light' ? (
						<Brightness4 onClick={() => toggleMode('dark')} />
					) : (
						<Brightness5 onClick={() => toggleMode('light')} />
					)}
				</Tooltip>
			</Grid>
		</Grid>
	);
}
