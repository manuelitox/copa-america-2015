var Checking;

Checking = require('./checking.jsx');

module.exports = {
	match: {},

	// get matches data
	//
	// @param:
	// @id match id 
	// @local codename local
	// @visitor codename visitor
	// @goalsLocal local goals
	// @goalsVisitor visitor goals
	// 
	get: function(id, local, visitor, goalsLocal, goalsVisitor) {
		
		// call model
		//
		this.model(id, local, visitor, goalsLocal, goalsVisitor);

		// call Storing Local Storage
		//
		return this.storeLS();
	},

	// modeling data
	//
	// @param:
	// @id match id 
	// @local codename local
	// @visitor codename visitor
	// @goalsLocal local goals
	// @goalsVisitor visitor goals	
	//
	model: function(id, local, visitor, goalsLocal, goalsVisitor) {
		this.match.id           = id;
		this.match.local        = local;
		this.match.visitor      = visitor;
		this.match.goalsLocal   = goalsLocal;
		this.match.goalsVisitor = goalsVisitor;

		// call cheking
		//
		this.checking();
	},

	// checking match
	//
	checking: function() {
		
		// call to winner check
		//
		Checking.winner(this.match);
		
		// call to goals difference check
		//
		Checking.goalsDifference(this.match);
	},

	// Storing Local Storage
	//
	storeLS: function() {
 		var id = this.match.id;

		localStorage.setItem(id, JSON.stringify(this.match));
		return localStorage;
	}

};