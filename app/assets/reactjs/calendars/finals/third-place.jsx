var React, Title, Matches;

React   = require('react');
Title   = require('./title.jsx');
Matches = require('../../matches/base-final.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Tercer y Cuarto lugar'
		});
	},	
	populateThirdPlace: function(matches) {
		var LSF1 = JSON.parse(localStorage.SF1),
				LSF2 = JSON.parse(localStorage.SF2);
		matches.map(function (match, index) {
			
			index == 0 ? match.matches[0].local = LSF1.loser : null;
			index == 0 ? match.matches[0].visitor = LSF2.loser : null;

		});				
	},	 		
	render: function() {
		if (localStorage.SF2 != undefined) {
			this.populateThirdPlace(this.props.matches);
		}		
		var matchesNode;
		matchesNode = this.props.matches.map(function (match, index) {
			return ( <Matches key={ index } match={ match.matches[0] } /> );
		});			
		return (
			<div className="final--semi">
				<Title title={ this.state.title } />
				{ matchesNode }
			</div>			
		);
	}
});