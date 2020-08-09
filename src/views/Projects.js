import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Images from '../components/Images';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
	chip: {
		margin: theme.spacing(0.5),
		marginLeft: 0,
	},
	image: {
		height: 300,
		overflow: 'hidden',
		borderRadius: 5,
		paddingTop: 0,
		paddingBottom: 0,
	},
	timelineItem: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
	content: {
		textAlign: 'left !important',
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	},
	contentNoImg: {
		textAlign: 'left !important',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	dividerNoImg: {
		height: 250,
	},
	timeline: {
		[theme.breakpoints.down('md')]: {
			padding: 0,
		},
	},
}));

export default function Projects() {
	const classes = useStyles();
	const [projects, setProjects] = React.useState([
		{
			id: 1,
			title: 'Formester',
			description:
				'A form backend as a service. It makes creating form endpoints for websites very easy. It requires zero programming knowledge. The user has the full control over the look and feel of the form. In Formester validation, spam protection and integration with different CRMs are few clicks away.',
			techdescrption:
				'Formester is built using Ruby on Rails as the backend and powerful Vue.js on the frontend. The database is powered by Postgresql. It integrates with Zapier to provide different integrations. Formester makes use of Google recaptcha to provide spam protection.',
			tech: [
				'Ruby On Rails',
				'Ruby',
				'Vue.js',
				'Vuex',
				'Bootstrap',
				'Postgresql',
				'Heroku',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/fm/fm1.png' },
				{ id: 1, url: '/images/fm/fm2.png' },
				{ id: 2, url: '/images/fm/fm3.png' },
			],
		},
		{
			id: 2,
			title: 'Shareito',
			description:
				'Organizations today rely on multiple software running in the cloud. Sharing access to contributors and stakeholders can be very challenging. Shareito provides a central place to manage this. It helps keep track of suspicious activities, ensures strong password usage and optional 2-factor authentication.',
			techdescrption:
				'Shareito uses Rails for RESTful API, Vue.js for user interfaces and Postgresql for the database. It integrates with 10+ 3rd party APIs currently. Hundred more to come soon.',
			tech: [
				'Ruby On Rails',
				'Ruby',
				'Vue.js',
				'Vuex',
				'Bootstrap',
				'Postgresql',
				'Heroku',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/st/sto1.png' },
				{ id: 1, url: '/images/st/sto2.png' },
			],
		},
		{
			id: 3,
			title: 'Lead Shuttle',
			description:
				'The lead shuttle is inbound sales and marketing tool which is highly integrated with Klentys API. It provides daily cohort and stepwise matrices for the user. Admin dashboard to administrate teams and its user regularly.',
			techdescrption:
				'Lead Shuttle is developed in Ruby on Rails and Postgresql database. Active Admin is used to providing administration for the Team users. Chartkick is used for making interactive and dynamic charts. The lead shuttle is deployed in Heroku platform and is integrated with AWS S3 for storage of files.',
			tech: [
				'Ruby On Rails',
				'Ruby',
				'Bootstrap',
				'Postgresql',
				'Heroku',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/ls/ls1.png' },
				{ id: 1, url: '/images/ls/ls2.png' },
				{ id: 1, url: '/images/ls/ls2.png' },
			],
		},
		{
			id: 4,
			title: 'Y-Axis',
			description:
				'Y-Axis is India’s No.1 Immigration & Visa Consultant and presumably the world’s largest B2C immigration firm. Y-Axis provides lot of work and study opportunities for indian professionals in overseas countries. They have various channels like Migrate, Visa, Coaching, Invest and Admission. Y-Axis is build in Ruby on Rails. And have ability to store and manage database with lacks of records in postgresql database. Also use Canvas LMS for online coaching.',
			techdescrption: '',
			tech: [
				'Ruby On Rails',
				'Ruby',
				'Bootstrap',
				'Postgresql',
				'Heroku',
				'AWS S3',
			],
			images: [],
		},
		{
			id: 5,
			title: 'Predera',
			description:
				'Predera is a data analytics and engineering partner that enables companies to be data-driven and stay competitive. Prederas experts in Artificial Intelligence, Data Science, Big Data and Machine Learning help companies leverage data lakes consisting of both structured and unstructured data to deliver delightful data products, insights and services. I have worked on Frontend which is build using React and Redux. Also have used many charting library like Google charts, Recharts, ChartKick and many more.',
			techdescrption: '',
			tech: [
				'Ruby On Rails',
				'Ruby',
				'Bootstrap',
				'Postgresql',
				'Heroku',
				'AWS S3',
			],
			images: [],
		},
		{
			id: 6,
			title: 'Arrivae',
			description:
				'Arrivae is a customised full home interior solution provider that enables you to get the house you always wanted, at the cost convenient for you. From designing the finest homes by some of the finest architects and interior designers, to material supplied by some of the most credible vendors, its no surprise that we take away the stress, leaving you with the home you always dreamt of.',
			techdescrption:
				'Arrivae is build using Ruby on Rails framework and databse postgresql. Used Vue.js for the interactive game for customer to experiment with interior.',
			tech: [
				'Ruby On Rails',
				'Ruby',
				'Vue.js',
				'Vuex',
				'Bootstrap',
				'Postgresql',
				'Heroku',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/arrivae_website/01.png' },
				{ id: 1, url: '/images/arrivae_website/02.png' },
				{ id: 3, url: '/images/arrivae_website/03.png' },
				{ id: 4, url: '/images/arrivae_website/04.png' },
			],
		},
		{
			id: 7,
			title: 'Office Arrivae',
			description:
				'Arrivae is Best Interior Designing Firm in Mumbai. Office application is used by internal team to manage production line and other business operations.',
			techdescrption:
				'Office Arrivae front end is build using React and Redux along with material-ui theme. Backend is been build using Ruby on Rails API framework and database as Postgresql. Use capistrano gem for deployment.',
			tech: [
				'React.js',
				'Redux',
				'Material UI',
				'Ruby On Rails',
				'Ruby',
				'Postgresql',
				'Digital Ocean',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/office_arrivae/01.jpeg' },
				{ id: 1, url: '/images/office_arrivae/02.jpeg' },
				{ id: 3, url: '/images/office_arrivae/03.jpeg' },
				{ id: 4, url: '/images/office_arrivae/04.jpeg' },
				{ id: 5, url: '/images/office_arrivae/05.jpeg' },
			],
		},
		{
			id: 8,
			title: 'Arrivae - Site Supervisor',
			description:
				'Site Supervisor application is used by Site Supervisor from the Arrivae team. It help them to track daily activities and task.',
			techdescrption:
				'Arrivae Site Supervisor application is build using React Native. Its intergrated with arrivae backend which is build in Ruby on Rails API framework.',
			tech: [
				'React Native',
				'React.js',
				'Redux',
				'Ruby On Rails',
				'Ruby',
				'Postgresql',
				'Digital Ocean',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/arrivae_ss/01.jpeg' },
				{ id: 1, url: '/images/arrivae_ss/02.jpeg' },
				{ id: 3, url: '/images/arrivae_ss/03.jpeg' },
				{ id: 4, url: '/images/arrivae_ss/04.jpeg' },
				{ id: 5, url: '/images/arrivae_ss/05.jpeg' },
				{ id: 6, url: '/images/arrivae_ss/06.jpeg' },
				{ id: 7, url: '/images/arrivae_ss/07.jpeg' },
			],
		},
		{
			id: 9,
			title: 'Arrivae Champion',
			description:
				'Arrivae believes in growing and wishes its partners to grow in the process. Under the unique incentive program, Arrivae welcomes the sales team of its partners to share the details of their leads with us. In return, they stand to receive attractive rewards and due recognition from their organisation. The objective is to add prospective clients to our database besides motivating the sales force of our partners.',
			techdescrption:
				'Arrivae Champion mobile application is build using React Native. Its intergrated with arrivae backend which is build in Ruby on Rails API framework.',
			tech: [
				'React Native',
				'React.js',
				'Redux',
				'Ruby On Rails',
				'Ruby',
				'Postgresql',
				'Digital Ocean',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/arrivae_lead/01.png' },
				{ id: 1, url: '/images/arrivae_lead/02.png' },
				{ id: 3, url: '/images/arrivae_lead/03.png' },
				{ id: 4, url: '/images/arrivae_lead/04.png' },
				{ id: 5, url: '/images/arrivae_lead/05.png' },
				{ id: 6, url: '/images/arrivae_lead/06.png' },
			],
		},
		{
			id: 10,
			title: 'Polka House',
			description:
				'Polka House is a Luxurious Brand for Home decor and Interior design.',
			techdescrption:
				'Frontend is developed using React 16 using react hooks, react bootstrap, HTML, CSS. Application is deployed on Digital Ocean.',
			tech: ['React.js', 'React Hooks', 'Digital Ocean'],
			images: [
				{ id: 0, url: '/images/polka_house/ph1.png' },
				{ id: 1, url: '/images/polka_house/ph2.png' },
				{ id: 3, url: '/images/polka_house/ph3.png' },
				{ id: 4, url: '/images/polka_house/ph4.png' },
			],
		},
		{
			id: 11,
			title: 'Naila - Salon Services at Home',
			description:
				'Naila is an app based beauty service provider Convenience at clients location, beauticians are stationed in the apartment/villa campus, where clients can book appointments through the apps smart booking feature.',
			techdescrption:
				'Frontend is developed using React Native, React and Backend with Ruby on Rails. Also provide Admin panel to upload data for the admin and maintain the app. There is also Razor payment integration',
			tech: [
				'React Native',
				'Ruby on Rails',
				'Ruby',
				'Razor Payment Gateway',
				'AWS EC2',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/naila/01.webp' },
				{ id: 1, url: '/images/naila/02.webp' },
				{ id: 3, url: '/images/naila/03.webp' },
				{ id: 4, url: '/images/naila/04.webp' },
			],
		},
		{
			id: 12,
			title: 'Eitoss',
			description:
				'Eitoss is idea creation, management and sharing application. Creating new ideas and keep records of the issues with the team and managing the flow of the idea. It support mutiple languages',
			techdescrption:
				'Frontend is developed using React, React Hooks, Redux, GraphQL and Material UI. Backend is developed using the Ruby on Rails, Postgresql and deployed on AWS EC2',
			tech: [
				'React.js',
				'Redux',
				'React Hooks',
				'Ruby on Rails',
				'Ruby',
				'GraphQL',
				'AWS EC2',
				'AWS S3',
			],
			images: [
				{ id: 0, url: '/images/eitoss/01.png' },
				{ id: 1, url: '/images/eitoss/02.png' },
				{ id: 2, url: '/images/eitoss/03.png' },
				{ id: 3, url: '/images/eitoss/04.png' },
				{ id: 4, url: '/images/eitoss/05.png' },
				{ id: 5, url: '/images/eitoss/06.png' },
				{ id: 6, url: '/images/eitoss/07.png' },
				{ id: 7, url: '/images/eitoss/08.png' },
				{ id: 8, url: '/images/eitoss/09.png' },
				{ id: 9, url: '/images/eitoss/10.png' },
			],
		},
	]);
	return (
		<Timeline align='alternate' className={classes.timeline}>
			<Grid
				container
				direction='row'
				justify='space-between'
				alignItems='center'
			>
				{projects &&
					projects.reverse().map((project) => (
						<>
							{project.images && project.images.length ? (
								<>
									<Hidden smDown>
										<TimelineItem
											className={classes.timelineItem}
											key={project.id}
										>
											<TimelineOppositeContent className={classes.image}>
												<Images images={project.images} />
											</TimelineOppositeContent>

											<TimelineSeparator>
												<TimelineDot />
												<TimelineConnector />
											</TimelineSeparator>

											<TimelineContent className={classes.content}>
												<Typography variant='h6'>{project.title}</Typography>
												<Typography
													color='textSecondary'
													variant='body1'
													gutterBottom
												>
													{project.description}
												</Typography>
												{project.techdescrption ? (
													<>
														<Typography variant='subtitle2'>
															Technology
														</Typography>
														<Typography color='textSecondary' variant='body1'>
															{project.techdescrption}
														</Typography>
													</>
												) : null}
												{project.tech.map((tech, index) => (
													<Chip
														key={index}
														size='small'
														className={classes.chip}
														label={tech}
														variant='outlined'
													/>
												))}
											</TimelineContent>
										</TimelineItem>
									</Hidden>
									<Hidden mdUp>
										<Grid item xs={12} className={classes.content}>
											<div item xs={12} className={classes.image}>
												<Images images={project.images} />
											</div>
											<div className={classes.content}>
												<Typography variant='h6'>{project.title}</Typography>
												<Typography
													color='textSecondary'
													variant='body1'
													gutterBottom
												>
													{project.description}
												</Typography>
												{project.techdescrption ? (
													<>
														<Typography variant='subtitle2'>
															Technology
														</Typography>
														<Typography color='textSecondary' variant='body1'>
															{project.techdescrption}
														</Typography>
													</>
												) : null}
												{project.tech.map((tech, index) => (
													<Chip
														key={index}
														size='small'
														className={classes.chip}
														label={tech}
														variant='outlined'
													/>
												))}
											</div>
										</Grid>
									</Hidden>
								</>
							) : (
								<>
									<Hidden mdDown>
										{!(project.id % 2) ? (
											<TimelineSeparator className={classes.dividerNoImg}>
												<TimelineDot />
												<TimelineConnector />
											</TimelineSeparator>
										) : null}
									</Hidden>
									<Grid item xs={12} md={5}>
										<div className={classes.contentNoImg}>
											<Typography variant='h6'>{project.title}</Typography>
											<Typography
												color='textSecondary'
												variant='body1'
												gutterBottom
											>
												{project.description}
											</Typography>
											{project.techdescrption ? (
												<>
													<Typography variant='subtitle2'>
														Technology
													</Typography>
													<Typography color='textSecondary' variant='body1'>
														{project.techdescrption}
													</Typography>
												</>
											) : null}
											{project.tech.map((tech, index) => (
												<Chip
													key={index}
													size='small'
													className={classes.chip}
													label={tech}
													variant='outlined'
												/>
											))}
										</div>
									</Grid>
								</>
							)}
						</>
					))}
			</Grid>
		</Timeline>
	);
}
