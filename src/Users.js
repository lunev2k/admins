import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {

	setDownClick() {
		console.log('click', 'setDownClick');
	}

	ignoreClick() {
		console.log('click', 'ignoreClick');
	}

	render() {
		return (
			<div>
				<h2>Пользователи</h2>
				<button onClick={this.setDownClick}>Отложить</button>
				<button onClick={this.ignoreClick}>Игнорировать</button>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>X</th>
							<th>GUID</th>
							<th>Фамилия</th>
							<th>Имя</th>
							<th>Отчество</th>
							<th>Группа</th>
							<th>Специальность</th>
						</tr>
					</thead>
					<tbody>
						{this.props.items.map((item, index) => (
							<UserItem key={index} data={item} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Users;
