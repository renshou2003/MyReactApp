import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../components';
import routesConfig from './config';

export default class CustomRouter extends Component {
	requireAuth = (permission, component) => {
		const { auth } = this.props;
		const permissions = auth.data ? auth.data.permissions : null;
		// const { auth } = store.getState().httpData;
		if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
		return component;
	};
	requireLogin = (component, permission) => {
		const { auth } = this.props;
		const permissions = auth.data ? auth.data.permissions : null;
		if (process.env.NODE_ENV === 'production' && !permissions) {
			// 线上环境判断是否登录
			return <Redirect to={'/login'} />;
		}
		return permission ? this.requireAuth(permission, component) : component;
	};
	getComponent = (routeItem, props) => {
		const Component = AllComponents[routeItem.component];
		if (routeItem.login) return <Component {...props} />;
		else return this.requireLogin(<Component {...props} />, routeItem.auth);
	};
	render() {
		return (
			<Switch>
				{Object.keys(routesConfig).map((key) =>
					routesConfig[key].map((r) => {
						const route = (r) => {
							return (
								<Route
									key={r.route || r.key}
									exact
									path={r.route || r.key}
									component={(props) => this.getComponent(r, props)}
								/>
							);
						};
						return r.component ? route(r) : r.subs.map((r) => route(r));
					})
				)}

				<Route render={() => <Redirect to="/404" />} />
			</Switch>
		);
	}
}
