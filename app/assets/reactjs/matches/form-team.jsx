var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return { 
			goals: 0
		};
	},
	setGoals: function(e) {
		this.setState({ goals : e.target.value });
	},
 	render: function() {
 		console.log( 'del partido: '+ this.props.belongMatch +' el '+ this.props.type +' tiene:'+ this.state.goals );
		return (
			<div className="match--form--team">
				<label htmlFor={ this.props.team.codename }><Teams team={ this.props.team } /></label>
				<input 
					type="number" 
					id={ this.props.team.codename } 
					name={ this.props.team.codename } 
					onChange={ this.setGoals } />
			</div>
		);
	}
});