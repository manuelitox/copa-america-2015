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
	render: function() {
		var matchesNode;
		console.log(this.props.matches);
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