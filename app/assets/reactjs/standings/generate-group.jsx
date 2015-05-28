var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');

module.exports = React.createClass({ 
 	render: function() {
 		var teamsNode;		
		teamsNode = this.props.teams.map(function (team, index) {
			return (
				<Teams key={ index } team={ team } />
			);
		});
		return (
			<div>
				{ teamsNode }
			</div>
		);
	}
});