import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loginUser } from '../actions';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LoginForm extends Component {

	state = {
		email: '',
		password: ''
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.loginUser(this.state, this.props.history)
	}
	
	render() {
		return(
			<div className='center-div'>

				<form onSubmit={ this.onSubmit }>
					<FormGroup>
						<ControlLabel>Email address</ControlLabel>
						<FormControl type="email" onChange= {this.onChange} name="email" value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Password</ControlLabel>
						<FormControl type="password" onChange= {this.onChange} name="password" value={this.state.password} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
					</FormGroup>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>      
			</div>
	)}
}

export default withRouter(connect(null, { loginUser })(LoginForm));