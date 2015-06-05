var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');
Stats = require('./stats.jsx');

module.exports = React.createClass({
 	render: function() {
 		var teamsNode, teams = this.props.teams;
		teamsNode = Stats.addStats(teams).map(function (team, index) {
			return (
				<tr key={ index }>
					<td>
						<Teams team={ team } />
					</td>
					<td>{ team.matches }</td>
					<td>{ team.wins }</td>
					<td>{ team.draws }</td>
					<td>{ team.loses }</td>
					<td>{ team.goals }</td>
					<td>{ team.goalsDifference }</td>
					<td>{ team.points }</td>
				</tr>
			);
		});
		return (
			<tbody>
				{ teamsNode }
			</tbody>	
		);
	}
});