import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minHeight: '50vh',
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(4),
		},
	},
	link: {
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(2),
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
	divider: {
		height: '50%',
	},
	herotext: {
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(2),
			fontSize: 16,
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid
				container
				direction='row'
				justify='space-evenly'
				alignItems='center'
			>
				<Grid item xs={12} md={5}>
					<Typography variant='h4' component='h2'>
						Sanketkumar Karve
					</Typography>
					<Typography variant='h5' component='h2'>
						Full Stack Developer
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						I'm available for work, get in touch <br />
						sanketkarve43 [@] gmail [.] com
					</Typography>
					<Link className={classes.link} href='https://github.com/SanketKarve'>
						<GitHub />
					</Link>
					<Link
						className={classes.link}
						href='https://linkedin.com/in/sanketkumarkarve'
					>
						<LinkedIn />
					</Link>
					<Link className={classes.link} href='https://twitter.com/KarveSanket'>
						<Twitter />
					</Link>
				</Grid>
				<Hidden mdDown>
					<Divider orientation='vertical' className={classes.divider} />
				</Hidden>
				<Grid item xs={12} md={5}>
					<Typography
						variant='h5'
						color='textSecondary'
						className={classes.herotext}
					>
						I love to work with new technologies and create mind-boggling,
						user-centric design experience on the web. Rest of time I do
						research on product UI and features and brainstorm on how can it be
						made better.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
