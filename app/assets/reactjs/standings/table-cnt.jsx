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
	countLoser: function(codename) {
		var count = 0;
		for (var i = 1; i < 19; i++) {
			if (JSON.parse(localStorage[i] || 0) !== 0) {
				if (JSON.parse(localStorage[i]).loser == codename) {
			 		count++;
			 	}
			}
		};
		return count;		
	},
	countDraw: function(codename) {
		var count = 0;
		for (var i = 1; i < 19; i++) {
			if (JSON.parse(localStorage[i] || 0) !== 0) {
				if (JSON.parse(localStorage[i]).local == codename || JSON.parse(localStorage[i]).visitor == codename) {
			 		JSON.parse(localStorage[i]).draw ? count++ : count;
			 	}
			}
		};
		return count;		
	},	
	countGoals: function(codename) {
		var count = 0;
		for (var i = 1; i < 19; i++) {
			if (JSON.parse(localStorage[i] || 0) !== 0) {
				if (JSON.parse(localStorage[i]).local == codename) {
			 		count += parseInt(JSON.parse(localStorage[i]).goalsLocal);
			 	} else if (JSON.parse(localStorage[i]).visitor == codename) {
			 		count += parseInt(JSON.parse(localStorage[i]).goalsVisitor);
			 	}
			}
		};
		return count;		
	},	
	countGoalsDifference: function(codename, totalGoals) {
		var count = 0;
		for (var i = 1; i < 19; i++) {
			if (JSON.parse(localStorage[i] || 0) !== 0) {
				if (JSON.parse(localStorage[i]).local == codename) {
			 		count += parseInt(JSON.parse(localStorage[i]).goalsVisitor);
			 	} else if (JSON.parse(localStorage[i]).visitor == codename) {
			 		count += parseInt(JSON.parse(localStorage[i]).goalsLocal);
			 	}
			}
		};
		return totalGoals - count;		
	},
	countPoints: function(codename, wins, draws) {
		var pointsByWins = 0, pointsByDraws = 0;
		pointsByWins = 3 * wins;
		pointsByDraws = 1 * draws;

		return pointsByWins + pointsByDraws;		
	},		
 	render: function() {
 		var teamsNode, 
 				countMatches = this.countMatches, 
 				countWinner = this.countWinner,
 				countLoser = this.countLoser,
 				countDraw = this.countDraw,
 				countGoals = this.countGoals,
 				countGoalsDifference = this.countGoalsDifference,
 				countPoints = this.countPoints;
	
		teamsNode = this.props.teams.map(function (team, index) {
			return (
				<tr key={ index }>
					<td>
						<Teams team={ team } />
					</td>
					<td>{ countMatches(team.codename) }</td>
					<td>{ countWinner(team.codename) }</td>
					<td>{ countDraw(team.codename) }</td>
					<td>{ countLoser(team.codename) }</td>
					<td>{ countGoals(team.codename) }</td>
					<td>{ countGoalsDifference(team.codename, countGoals(team.codename)) }</td>
					<td>{ countPoints(team.codename, countWinner(team.codename), countDraw(team.codename)) }</td>					
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