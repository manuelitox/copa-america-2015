var React, Matches;

React = require('react');
Matches = require('../../matches/base.jsx');

module.exports = React.createClass({
 	render: function() {	
 		var matchesNode, group = this.props.group;
 		matchesNode = this.props.day.matches.map(function (match, index) {
 			if (match.belong_to == group) {
	 		 	return (
				 	<Matches key={ index } match={ match } />
	 			);
 			}
 		});
		return (
			<div className="matches--cnt">
				{ matchesNode }
			</div>
		);
	}
});