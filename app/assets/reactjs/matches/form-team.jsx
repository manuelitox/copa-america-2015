var React, Teams;

React   = require('react');
Teams   = require('../teams/base.jsx');

module.exports = React.createClass({
 	render: function() {
		return (
			<div className="match--form--team">
				<label htmlFor={ this.props.team.codename }><Teams team={ this.props.team } /></label>
				<input 
					type="number" 
					id={ this.props.team.codename } 
					name={ this.props.team.codename }
					placeholder="0"
					onChange={ this.props.goals } />
			</div>
		);
	}
});