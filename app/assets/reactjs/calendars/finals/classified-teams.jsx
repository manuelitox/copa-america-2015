var Stats;

Stats = require('../../standings/stats.jsx');

module.exports = {

	// get classifed teams: 
	// winners and the two best third places
	// 
	//
	teams: function() {
		var groups, winners, thirdPlaces = [], output = { winners: [], twoBestThirdPlaces: [] };
		groups = JSON.parse(localStorage.groups);
		if (groups.a.length >= 1) {
			var groupA = this.getWinners(groups.a);
			winners = groupA.concat(this.getWinners(groups.b), this.getWinners(groups.c));
			thirdPlaces.push(this.getThirdPlace(groups.a, 'A'), this.getThirdPlace(groups.b, 'B'), this.getThirdPlace(groups.c, 'C'));
			output.winners = winners;
			output.twoBestThirdPlaces = this.getTwoBestThird(thirdPlaces);
			return output;
		}
	},

	// get winners teams
	// 
	// @param: 
	// groups: object group
	//
	getWinners: function(groups) {
		var teams = [];
		groups[0].map(function (team, i) {
			i <= 1 ? teams.push(team) : null;
		});
	 	return teams;
	},

	// get the best third places 
	// 
	// @param: 
	// groups: object group
	// who: who it's the group (A, B or C)
	//
	getThirdPlace: function(group, who) {
		var teams = [];
		group[0].map(function (team, i) {
			team.belong_to = who;
			i == 2 ? teams.push(team) : null;
		});
		return teams[0];
	},

	// get the two best third places 
	// 
	// @param: 
	// thirdPlaces: object of best third places
	//
	getTwoBestThird: function(thirdPlaces) {
		var twoBestThirds = [];
		Stats.sortByPoints(thirdPlaces).map(function (team, i) {
			i <= 1 ? twoBestThirds.push(team) : null;
		});
		return twoBestThirds;
	}

};