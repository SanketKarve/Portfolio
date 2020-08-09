import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogCard from '../components/BlogCard';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
}));

export default function Blogs() {
	const classes = useStyles();
	const [blogs, setBlogs] = React.useState([
		{
			id: 1,
			title: 'Reduce webpack bundle size in Vue',
			description:
				'Learn how you can significantly analyze the webpack bundle size in Vue using Webpack Bundle Analyzer and reduce the bundle size from MB to few KB.',
			url: 'http://www.sanketkarve.com/blog/webpack-bundle-size-reduce/',
		},
		{
			id: 2,
			title: 'Integrate Vue.js with Rails 5 Application',
			description:
				'There are more ways to integrate Vue.js and Rails other than API application. Learn how to intergrate Vue.js and Rails 5 application using webpacker gem.',
			url: 'http://www.sanketkarve.com/blog/vue-rails-integration/',
		},
		{
			id: 3,
			title: 'Create Active Admin custom forms in Ruby on Rails',
			description:
				'Active Admin is great gem for administration framework. But creating custom forms can be tricky.Learn how to create custom form by simple and easy way.',
			url:
				'http://www.sanketkarve.com/blog/active-admin-custom-form-in-ruby-on-rails/',
		},
	]);
	return (
		<div className={classes.root}>
			<Grid container direction='row' justify='center' alignItems='center'>
				<Grid item xs={12}>
					<Typography variant='h4'>Most Viewed Posts</Typography>
				</Grid>
				{blogs.map((blog) => (
					<Grid key={blog.id} item xs={12} md={4}>
						<BlogCard blog={blog} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}
