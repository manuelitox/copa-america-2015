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
	render: function() {
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