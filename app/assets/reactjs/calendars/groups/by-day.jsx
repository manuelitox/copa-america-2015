var React, Matches;

React = require('react');
Matches = require('../../matches/base.jsx');

module.exports = React.createClass({ 
 	render: function() {	
 		var matchesNode;
 		matchesNode = this.props.day.matches.map(function (match, index) {
 		 	return (
			 	<Matches key={ index } match={ match } />
 			);
 		});
		return (
			<div className="matches--cnt">
				{ matchesNode }
			</div>
		);
	}
});