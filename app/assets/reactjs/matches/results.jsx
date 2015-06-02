var React, FormTeam;

React = require('react');

module.exports = { 
	output: [],
	data: function(match, localGoals, visitorGoals) {
		this.output.id = match.id;
		this.output.teams = {
			local: match.local.codename,
			visitor: match.visitor.codename
		};
		this.output.goals = {
			local: localGoals,
			visitor: visitorGoals
		};
		this.output.difference = {
			local: localGoals - visitorGoals,
			visitor: visitorGoals - localGoals
		};

		this.winner(localGoals, visitorGoals);

		return this.output;
	},
	winner: function(localGoals, visitorGoals) {
		if (localGoals > visitorGoals) { 
			this.output.points = { local: 3, visitor: 0 };
		}
		else if (localGoals < visitorGoals) { 
			this.output.points = { local: 0, visitor: 3 };
		}
		else {
			this.output.points = { local: 1, visitor: 1 };
		}
	}
};