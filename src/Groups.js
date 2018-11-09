import React, { Component } from "react";

class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
		this.handleGroupChange = this.handleGroupChange.bind(this);
	}

	handleGroupChange = (event) => {
		const name = event.target.name;
		this.setState(list[name]: false);
		console.log('onChange', name);
	}

	setDownClick() {
		console.log('onClick', 'setDownClick');
	}

	ignoreClick() {
		console.log('onClick', 'ignoreClick');
	}

	render() {
		return (
			<div>
				<h2>Группы</h2>
				<button onClick={this.setDownClick}>Отложить</button>
				<button onClick={this.ignoreClick}>Игнорировать</button>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>X</th>
							<th>GUID</th>
							<th>Наименование</th>
							<th>Специальность</th>
							<th>Факультет</th>
						</tr>
					</thead>
					<tbody>
						{this.props.items.map((item, index) =>
							<tr key={index}>
								<td><input type='checkbox' name={item.GroupGUID} onChange={this.handleGroupChange}></input></td>
								<td>{item.GroupGUID}</td>
								<td>{item.Group}</td>
								<td>{item.Spec}</td>
								<td>{item.Faculty}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Groups;
