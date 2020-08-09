import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1),
		minHeight: 250,
		position: 'relative',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	action: {
		position: 'absolute',
		bottom: 0,
	},
}));

export default function BlogCard({ blog }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h6' component='h2'>
					{blog.title}
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					{blog.description}
				</Typography>
			</CardContent>
			<CardActions className={classes.action}>
				<Button href={blog.url} size='small'>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
}
