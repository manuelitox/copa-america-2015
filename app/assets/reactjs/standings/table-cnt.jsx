var React, Teams, Stats;

React = require('react');
Teams = require('../teams/base.jsx');
Stats = require('./stats.jsx');

module.exports = React.createClass({
	getInitialState: function() {
    return {
    	isActive: -1
    };
	},
	toggle: function(i) {
		this.setState({ isActive : i });
	},
	dynamicClasses: function(i) {
		if (this.state.isActive == i) {
			return 'groups--team actived';
		} else {
			return 'groups--team';
		}
	},
	showBtn: function(i) {
		if (this.state.isActive == i) {
			return null;
		} else {
			return (
				<button className="groups--team--btn">
					<span className="icon-plus"></span>
				</button>
			);
		}
	},
 	render: function() {
 		var teamsNode, teams, dynamicClasses, toggle, showBtn; 
 		teams          = this.props.teams;
 		dynamicClasses = this.dynamicClasses;
 		toggle         = this.toggle;
 		showBtn        = this.showBtn;
		teamsNode = Stats.addStats(teams).map(function (team, index) {
			return (
				<div className={ dynamicClasses(index) } key={ index }>
					<div className="groups--team--main" onClick={ toggle.bind(null, index) }>
						<div className="groups--team--who"><Teams team={ team } /></div>
						{ showBtn(index) }
						<div className="groups--team--points">{ team.points } <span className="groups--team--highlight">Pts</span></div>
					</div>
					<div className="groups--team--secondary">
						<div className="groups--team--matches">{ team.matches } <span className="groups--team--highlight">P</span></div>
						<div className="groups--team--wins">{ team.wins } <span className="groups--team--highlight">V</span></div>
						<div className="groups--team--draws">{ team.draws } <span className="groups--team--highlight">E</span></div>
						<div className="groups--team--loses">{ team.loses } <span className="groups--team--highlight">D</span></div>
						<div className="groups--team--goals">{ team.goals } <span className="groups--team--highlight">G</span></div>
						<div className="groups--team--goals-difference">{ team.goalsDifference } <span className="groups--team--highlight">DG</span></div>
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