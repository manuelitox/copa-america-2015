var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');

module.exports = React.createClass({ 
	countMatches: function(codename) {
		var count = 0;
		for (var i = 1; i < 19; i++) {
			if (JSON.parse(localStorage[i] || 0) !== 0) {
				if (JSON.parse(localStorage[i]).local === codename) {
			 		count++;
			 	} else if (JSON.parse(localStorage[i]).visitor === codename) {
			 		count++;
				}
			}
		};
		return count;
	},
	countWinner: function(codename) {
		var count = 0;
		for (var i = 1; i < 19; i++) {
			if (JSON.parse(localStorage[i] || 0) !== 0) {
				if (JSON.parse(localStorage[i]).winner === codename) {
			 		count++;
			 	}
			}
		};
		return count;		
	},
 	render: function() {
 		var teamsNode, countMatches = this.countMatches, countWinner = this.countWinner;
		teamsNode = this.props.teams.map(function (team, index) {
			return (
				<tr key={ index }>
					<td>
						<Teams team={ team } />
					</td>
					<td>{ countMatches(team.codename) }</td>
					<td>{ countWinner(team.codename) }</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>					
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