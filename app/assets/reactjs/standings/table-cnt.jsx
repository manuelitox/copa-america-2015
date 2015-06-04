var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');
Stats = require('./stats.jsx');

module.exports = React.createClass({ 
 	render: function() {
 		var teamsNode;
		teamsNode = this.props.teams.map(function (team, index) {
			return (
				<tr key={ index }>
					<td>
						<Teams team={ team } />
					</td>
					<td>{ Stats.countMatches(team.codename) }</td>
					<td>{ Stats.countWinner(team.codename) }</td>
					<td>{ Stats.countDraw(team.codename) }</td>
					<td>{ Stats.countLoser(team.codename) }</td>
					<td>{ Stats.countGoals(team.codename) }</td>
					<td>{ Stats.countGoalsDifference(team.codename, Stats.countGoals(team.codename)) }</td>
					<td>{ Stats.countPoints(team.codename, Stats.countWinner(team.codename), Stats.countDraw(team.codename)) }</td>					
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