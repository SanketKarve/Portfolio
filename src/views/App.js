import React, { useState, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme, Container } from '@material-ui/core';
const Mode = React.lazy(() => import('../components/Mode'));
const Home = React.lazy(() => import('./Home'));
const Projects = React.lazy(() => import('./Projects'));
const Blogs = React.lazy(() => import('./Blogs'));

export default function App() {
	const [mode, setMode] = useState('light');
	const theme = createMuiTheme({
		palette: {
			type: mode,
		},
	});

	const toggleMode = (modeType) => {
		setMode(modeType);
	};
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container fixed>
					<Mode mode={mode} toggleMode={toggleMode} />
					<Home />
					<Projects />
					<Blogs />
				</Container>
			</ThemeProvider>
		</Suspense>
	);
}
