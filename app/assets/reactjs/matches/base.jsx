var React, FormTeam, Results;

React = require('react');
FormTeam = require('./form-team.jsx');
Results = require('./results.jsx');

module.exports = React.createClass({ 
	getInitialState: function() {
		return {
			goalsLocal: 0,
			goalsVisitor: 0
		};
	},	
	setGoalsLocal: function(e) {
		this.setState({ goalsLocal: e.target.value });
	},
	setGoalsVisitor: function(e) {
		this.setState({ goalsVisitor: e.target.value });
	},
 	render: function() {
		Results.get(
 			this.props.match.id, 
 			this.props.match.local.codename,
 			this.props.match.visitor.codename, 
 			this.state.goalsLocal, 
 			this.state.goalsVisitor
 		); 		 		
		return (
			<div className="match">
				<form className="match--form" name={ this.props.match.id }>
					<fieldset>
						<FormTeam team={ this.props.match.local } goals={ this.setGoalsLocal } />
						<span className="match--time">{ this.props.match.time }</span>
						<FormTeam team={ this.props.match.visitor } goals={ this.setGoalsVisitor } />
					</fieldset>
				</form>
			</div>
		);
	}
});