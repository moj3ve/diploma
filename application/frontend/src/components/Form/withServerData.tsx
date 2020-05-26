import * as React from 'react';

import debounce from 'lodash/debounce';


export const withServerData = ({ fetch, shouldRefetch, additionalProps = {} }) => (Component) => class extends React.Component<any, any> {
	static displayName = `withServerData(${Component.name})`;

	state = {
		isFetching: true,
		isFetchingError: true,
		data: null
	}

	setData = (data) => {
		this.setState(state => ({
			...state,
			data: data,
			isFetching: false,
			isFetchingError: false,
		}));
	}

	handleFetchError = (err) => {
		this.setState(state => ({
			...state,
			isFetching: false,
			isFetchingError: true,
		}));
		throw err;
	}

	handleFetchStart = () => {
		this.setState(state => ({
			...state,
			isFetching: true,
			isFetchingError: false,
		}));
	}

	_fetch = (...args) => {
		fetch(...args)
			.then(this.setData)
			.catch(this.handleFetchError);
	}

	_fetchDebounced = debounce((...args) => {
		this._fetch(...args);
	}, 400)

	fetchData = () => {
		this.handleFetchStart();
		this._fetch(this.props);
	}

	fetchDataWithParams = (params) => {
		this.handleFetchStart();
		this._fetchDebounced(this.props, params);
	}

	appendSomeData = (appendNewData) => {
		this.setState(state => ({
			...state,
			data: appendNewData(state.data)
		}));
	}

	appendNewItem = (item) => {
		this.appendSomeData((oldItems) => {
			return [...oldItems, item];
		});
	}

	componentDidUpdate(oldProps) {
		if (shouldRefetch(oldProps, this.props)) {
			this.fetchData();
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	shouldComponentUpdate(newProps, newState) {
		if (newProps.values[newProps.name] !== this.props.values[this.props.name]) {
			return true;
		}

		if (newProps.errors[newProps.name] !== this.props.errors[this.props.name]) {
			return true;
		}

		if (
			this.state.isFetching !== newState.isFetching
			|| this.state.isFetchingError !== newState.isFetchingError
			|| this.state.data !== newState.data
		) {
			return true;
		}

		return false;
	}

	render() {
		return (
			<Component
				{...this.props}
				{...this.state}
				{...additionalProps}
				isFetching={this.state.isFetching}
				appendSomeData={this.appendSomeData}
				appendNewItem={this.appendNewItem}
				fetchDataWithParams={this.fetchDataWithParams}
			/>
		);
	}

}
