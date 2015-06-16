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
	render: function() {
		
		console.log(ClassifiedTeams.teams());

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