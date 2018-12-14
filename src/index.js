import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {firebaseApp} from './firebase';

import { logUser } from './actions';
import reducer from './reducers/index';

const store=createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user=>{
	if(user){

		console.log('signed in',user);
		const email=user.email;
		store.dispatch(logUser(email));
		browserHistory.push('app');
	} else{
		console.log("Must sign in");
		browserHistory.replace('/signin');

	}
})

ReactDOM.render(

	<Provider store={store}>
		<Router path="/" history={browserHistory}>
	      <Route path="/app" component={App} />
	      <Route path="/signin" component={SignIn} />
	      <Route path="/signup" component={SignUp} />
	    </Router>
    </Provider>

	,document.getElementById('root'));