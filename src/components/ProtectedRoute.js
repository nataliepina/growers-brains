import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component, ...rest }) => {
	//TODO: fetch login state from redux or local storage and redirect accordingly
	let isLoggedIn = true; // TODO

	return isLoggedIn ? (
		<Route component={component} {...rest} />
	) : (
		<Redirect to={'/signup'} />
	);
};

export default ProtectedRoute;
