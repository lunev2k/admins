import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import React, { Component } from 'react';
import Groups from './Groups';
// import Users from './Users';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: [],
			users: [],
		};
	}

	componentDidMount() {
		axios
			.get("http://172.24.20.110/api/public/import/check/group")
			.then(res => {
				this.setState({
					groups: res.data
				});
			});
		axios
			.get("http://172.24.20.110/api/public/import/check/user")
			.then(res => {
				this.setState({
					users: res.data
				});
			});
	}

	render() {
		return (
		  <div className="App">
		  	<h1>Синхронизация данных</h1>
		    <Groups items={this.state.groups} />
		    {/* <Users items={this.state.users} /> */}
		  </div>
		);
	}
}

export default App;
