import React, { Component } from "react";

class UserItem extends Component {

	render() {		
		return (
			<tr>
				<td><input type='checkbox' value={this.props.data.StudentsGUID}></input></td>
				<td>{this.props.data.StudentsGUID}</td>
				<td>{this.props.data.F}</td>
				<td>{this.props.data.I}</td>
				<td>{this.props.data.O}</td>
				<td>{this.props.data.Group}</td>
				<td>{this.props.data.Spec}</td>
			</tr>
		);
	}
}

export default UserItem;