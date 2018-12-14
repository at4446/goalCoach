import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';



class App extends Component {
  
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
       <h2>Goals</h2>
       <AddGoal />
       <div></div>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
	console.log('state',state);
	return{}



} 

export default connect (mapStateToProps,null)(App);