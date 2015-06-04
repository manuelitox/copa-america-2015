module.exports = {

	// count total matches
	//
	// @param:
	// codename: acronym of team
	//
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

	// count total winners
	//
	// @param:
	// codename: acronym of team
	//	
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

	// count total losers
	//
	// @param:
	// codename: acronym of team
	//	
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

	// count total draws
	//
	// @param:
	// codename: acronym of team
	//	
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

	// count total goals
	//
	// @param:
	// codename: acronym of team
	//	
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

	// count goals difference
	//
	// @param:
	// codename: acronym of team
	// totalGoals: return value of countGoals function.
	//	
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

	// count total points
	//
	// @param:
	// codename: acronym of team
	// wins: return value of countWinner
	// draws: return value of countDraw
	//	
	countPoints: function(codename, wins, draws) {
		var pointsByWins = 0, pointsByDraws = 0;
		pointsByWins = 3 * wins;
		pointsByDraws = 1 * draws;

		return pointsByWins + pointsByDraws;		
	}
	
};