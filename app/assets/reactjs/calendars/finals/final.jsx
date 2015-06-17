var React, Title, Matches;

React   = require('react');
Title   = require('./title.jsx');
Matches = require('../../matches/base-final.jsx');

module.exports = React.createClass({	 
	getInitialState: function() {
		return ({  
			title: 'Final'
		});
	},	
	populateFinal: function(matches) {
		var WSF1 = JSON.parse(localStorage.SF1),
				WSF2 = JSON.parse(localStorage.SF2);
		matches.map(function (match, index) {
			
			index == 0 ? match.matches[0].local = WSF1.winner : null;
			index == 0 ? match.matches[0].visitor = WSF2.winner : null;

		});				
	},		 		
	render: function() {
		if (localStorage.SF2 != undefined) {
			this.populateFinal(this.props.matches);
		}			
		var matchesNode;
		matchesNode = this.props.matches.map(function (match, index) {
			return ( <Matches key={ index } match={ match.matches[0] } /> );
		});			
		return (
			<div className="final--end">
				<Title title={ this.state.title } />
				{ matchesNode }	
			</div>
		);
	}
});