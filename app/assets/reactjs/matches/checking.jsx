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
			match.draw 	 = false;
		}
		else if (match.goalsLocal < match.goalsVisitor) {
			match.winner = match.visitor;
			match.loser  = match.local;	
			match.draw 	 = false;		
		}
		else {
			match.winner = null;
			match.loser  = null;
			match.draw 	 = true;
		}			
	},

	winnerFinalPhase: function(match, goalsLocal, goalsVisitor) {
		var result = {};
		if (goalsLocal > goalsVisitor) {
			result.winner = match.local.codename;
			result.loser  = match.visitor.codename;
			result.draw 	= false;
		} else if (goalsLocal < goalsVisitor) {
			result.winner = match.visitor.codename;
			result.loser  = match.local.codename;
			result.draw 	= false;
		} else {
			result.winner = null;
			result.loser  = null;
			result.draw 	= true;					
		}
		return result;
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