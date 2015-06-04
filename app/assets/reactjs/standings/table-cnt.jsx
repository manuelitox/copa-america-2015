var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');
Stats = require('./stats.jsx');

module.exports = React.createClass({
	sortByPoints: function (teams) {
		var keySorted, newTeams = [];
		keysSorted = Object.keys(teams).sort(
			function(a,b) { 
				return teams[a].points-teams[b].points; 
			});
		
		keysSorted.map(function (key) {
		  newTeams.push(teams[key]);
		});		
		return newTeams;
	}, 
 	render: function() {
 		var teamsNode, teams = this.sortByPoints(this.props.teams);
		teamsNode = this.props.teams.map(function (team, index) {
			Stats.addStats(team);
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