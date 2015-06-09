var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');
Stats = require('./stats.jsx');

module.exports = React.createClass({
 	render: function() {
 		var teamsNode, teams = this.props.teams;
		teamsNode = Stats.addStats(teams).map(function (team, index) {
			return (
				<div className="groups--team" key={ index }>
					<div className="groups--team--who"><Teams team={ team } /></div>
					<div className="groups--team--matches">{ team.matches }</div>
					<div className="groups--team--wins">{ team.wins }</div>
					<div className="groups--team--secondary">
						<div className="groups--team--draws">{ team.draws }</div>
						<div className="groups--team--loses">{ team.loses }</div>
						<div className="groups--team--goals">{ team.goals }</div>
						<div className="groups--team--goals-difference">{ team.goalsDifference }</div>
						<div className="groups--team--points">{ team.points }</div>
					</div>
				</div>
			);
		});
		return (
			<div className="groups--teams">
				{ teamsNode }
			</div>
		);
	}
});