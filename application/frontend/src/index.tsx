import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { store } from './store/';
import { NavBar } from './components/NavBar/';
import { Navigation } from './components/Navigation/';

import './styles.scss';


const App = (props) => {
	return (
		<Navigation>
			Hello
		</Navigation>
	);
}


ReactDOM.render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.getElementById('root')
);
