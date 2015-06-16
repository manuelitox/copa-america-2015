var React, Title, Matches, ClassifiedTeams;

React           = require('react');
Title           = require('./title.jsx');
Matches         = require('../../matches/base-final.jsx');
ClassifiedTeams = require('./classified-teams.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Cuartos de Final'
		});
	},
	populateQuarters: function(matches, winners, twoBestThirdPlaces) {
		console.log(winners);
		matches.map(function (match, index) {
			index == 0 ? match.matches[0].local = winners[0] : null;
			index == 1 ? match.matches[0].local = winners[1] : null;
			index == 2 ? match.matches[0].local = winners[2] : null;
			index == 3 ? match.matches[0].local = winners[4] : null;
		});
	},
	render: function() {
		
		// localStorage.length >= 18 ? console.log(ClassifiedTeams.teams()) : null;
		// console.log(ClassifiedTeams.teams());
		// console.log(this.props.matches[0].matches[0].local);

		var classifiedTeams = ClassifiedTeams.teams();
		if (classifiedTeams != undefined) {
			this.populateQuarters(this.props.matches, classifiedTeams.winners, classifiedTeams.twoBestThirdPlaces);
		}

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