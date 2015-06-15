var React, Title, Matches;

React   = require('react');
Title   = require('./title.jsx');
Matches = require('../../matches/base-final.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Cuartos de Final'
		});
	},
	teams: function() {
		var groups, winners = [], thirdPlace = {};
		groups = JSON.parse(localStorage.groups);
		winners.a = this.getWinners(groups.a);
		winners.b = this.getWinners(groups.b);
		winners.c = this.getWinners(groups.c); 
		thirdPlace.a = this.getThirdPlace(groups.a);
		thirdPlace.b = this.getThirdPlace(groups.b);
		thirdPlace.c = this.getThirdPlace(groups.c);
		return winners;
		//return this.getTwoBestThird(thirdPlace);
	},
	getWinners: function(groups) {
		var teams = [];
		if (groups.length >= 1) {
			groups[0].map(function (team, i) {
			 	i <= 1 ? teams.push(team) : null;
		 	});
	 	}
	 	return teams;
	},
	getThirdPlace: function(groups) {
		var teams = [];
		if (groups.length >= 1) {
			groups[0].map(function (team, i) {
				i == 2 ? teams.push(team) : null;
			});
		}
		return teams[0];
	},
	// getTwoBestThird: function(thirdPlace) {
	
	// },
	render: function() {
		console.log(this.teams());


		var matchesNode;
		matchesNode = this.props.matches.map(function (match, index) {
			return ( <Matches key={ index } match={ match.matches[0] } /> );
		});
		return (
			<div className="final--quarter">
				<Title title={ this.state.title } />
				{ matchesNode }
			</div>
		);
	}
});