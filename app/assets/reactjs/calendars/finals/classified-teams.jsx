var Stats;

Stats = require('../../standings/stats.jsx');

module.exports = {

	teams: function() {
		var groups, winners = [], thirdPlaces = [];
		groups = JSON.parse(localStorage.groups);
		if (groups.a.length >= 1) {
			winners.push(this.getWinners(groups.a), this.getWinners(groups.b), this.getWinners(groups.c));
			thirdPlaces.push(this.getThirdPlace(groups.a, 'A'), this.getThirdPlace(groups.b, 'B'), this.getThirdPlace(groups.c, 'C'));

			return winners;
			//return thirdPlaces;
			//return this.getTwoBestThird(thirdPlaces);
		}
	},

	getWinners: function(groups) {
		var teams = [];
		groups[0].map(function (team, i) {
			i <= 1 ? teams.push(team) : null;
		});
	 	return teams;
	},

	getThirdPlace: function(group, who) {
		var teams = [];
		group[0].map(function (team, i) {
			team.belong_to = who;
			i == 2 ? teams.push(team) : null;
		});
		return teams[0];
	},

	getTwoBestThird: function(thirdPlaces) {
		var twoBestThirds = [];
		Stats.sortByPoints(thirdPlaces).map(function (team, i) {
			i <= 1 ? twoBestThirds.push(team) : null;
		});
		return twoBestThirds;
	}

};