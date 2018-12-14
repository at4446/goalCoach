import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            title: ''
        }
    }

addGoal(){

	
	goalRef.push({email:this.props.email,title:this.state.title});
}
    render() {
        return (
        <div className="form-inline">
        	<div className="form-group">
		          <input
		            type="text"
		            placeholder="Add a goal"
		            className="form-control"
		            style={{marginRight: '5px'}}
		            onChange={event => this.setState({title: event.target.value})}
		            
		          />
		          <button
		            className="btn btn-success"
		            type="button"
		            onClick={() => this.addGoal()}
		          >
		            Submit
		          </button>
        	</div>
      </div>
        )
    }
}

const mapStateToProps = state => ({
  email: state.email
});
export default connect(mapStateToProps, null)(AddGoal);