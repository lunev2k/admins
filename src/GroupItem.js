import React, { Component } from "react";

class GroupsItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: true,
			guid: this.props.data.GroupGUID
		};
		this.handleGroupChange = this.handleGroupChange.bind(this);
	}

	handleGroupChange() {
		this.setState({isChecked: !this.state.isChecked});
		this.setState({guid: this.state.guid});
	}

	render() {		
		return (
			<tr>
				<td><input type='checkbox' value={this.props.data.GroupGUID} onChange={this.handleGroupChange}></input></td>
				<td>{this.props.data.GroupGUID}</td>
				<td>{this.props.data.Group}</td>
				<td>{this.props.data.Spec}</td>
				<td>{this.props.data.Faculty}</td>
			</tr>
		);
	}
}

export default GroupsItem;
