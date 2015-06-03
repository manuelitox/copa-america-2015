module.exports = {

	// cheking who was the winner and loser
	//
	// @param 
	// @match object match 
	// 
	winner: function(match) {
		if (match.goalsLocal > match.goalsVisitor) {
			match.winner = match.local;
			match.loser  = match.visitor;
		}
		else if (match.goalsLocal < match.goalsVisitor) {
			match.winner = match.visitor;
			match.loser  = match.local;			
		}
		else {
			match.winner = null;
			match.loser  = null;
		}			
	},

	// calculate goals difference
	//
	// @param 
	// @match object match 
	//
	goalsDifference: function(match) {
		match.goalsDifferenceLocal   = match.goalsLocal - match.goalsVisitor;
		match.goalsDifferenceVisitor = match.goalsVisitor - match.goalsLocal;		
	}

};		