var React, Flag;

React = require('react');
Flag 	= require('./flag.jsx');

module.exports = React.createClass({ 
 	render: function() {
		return (
			<div className="team">
				<Flag country={ this.props.team.country } />
				<h3 className="team--codename">{ this.props.team.codename }</h3>
			</div>
		);
	}
});