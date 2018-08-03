import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Amplify, {API} from "aws-amplify";
import config from './config'


import { Provider } from 'react-redux';

// main routes
import AppRoutes from './routes';

import store from './store';

Amplify.configure({
	Auth: {
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	  },
	API: {
		endpoints: [
			{
				name: "peermarkit",
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			},
		]
	}
});

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
