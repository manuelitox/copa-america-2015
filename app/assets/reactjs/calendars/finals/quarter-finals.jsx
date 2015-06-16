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
		// console.log(twoBestThirdPlaces);
		var _this = this;
		matches.map(function (match, index) {
			
			index == 0 ? match.matches[0].local = winners[0] : null;
			index == 0 ? match.matches[0].visitor = _this.filterThirdPlace(twoBestThirdPlaces, 'B', 'C') : null;

			index == 1 ? match.matches[0].local = winners[1] : null;
			index == 1 ? match.matches[0].visitor = winners[5] : null;
			
			index == 2 ? match.matches[0].local = winners[2] : null;
			index == 2 ? match.matches[0].visitor = _this.filterThirdPlace(twoBestThirdPlaces, 'A', 'C', _this.filterThirdPlace(twoBestThirdPlaces, 'B', 'C').belong_to) : null;			

			index == 3 ? match.matches[0].local = winners[4] : null;
			index == 3 ? match.matches[0].visitor = winners[3] : null;

		});
	},
	filterThirdPlace: function(thirdPlaces, group, optional, selected) {
		function filterByGroup(team) {
			if (team.belong_to != selected) {
				return team.belong_to == group ? team.belong_to == group : team.belong_to == optional;
			}
		};
		return thirdPlaces.filter(filterByGroup)[0];
	},		
	render: function() {
		if (localStorage.length >= 18) {
			var classifiedTeams = ClassifiedTeams.teams();
			if (classifiedTeams != undefined) {
				this.populateQuarters(this.props.matches, classifiedTeams.winners, classifiedTeams.twoBestThirdPlaces);
			}
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