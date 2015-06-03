var React, FormTeam, Results;

React = require('react');
FormTeam = require('./form-team.jsx');
Results = require('./results.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			goalsLocal: 0,
			goalsVisitor: 0,
			isActive: false
		};
	},	
	setGoalsLocal: function(e) {
		this.setState({ 
			goalsLocal: e.target.value, 
			isActive: true
		});
	},
	setGoalsVisitor: function(e) {
		this.setState({ 
			goalsVisitor: e.target.value,
			isActive: true			
		});
	},
 	render: function() {
 		if (this.state.isActive) {
			Results.get(
	 	 		this.props.match.id, 
	 	 		this.props.match.local.codename,
	 	 		this.props.match.visitor.codename, 
	 	 		this.state.goalsLocal, 
	 	 		this.state.goalsVisitor
	 	 	);
	 	}
		return (
			<div className="match">
				<form className="match--form" name={ this.props.match.id }>
					<fieldset>
						<FormTeam 
							team={ this.props.match.local } 
							goals={ this.setGoalsLocal }  
							id={ this.props.match.id } />
						<span className="match--time">{ this.props.match.time }</span>
						<FormTeam 
							team={ this.props.match.visitor } 
							goals={ this.setGoalsVisitor } 
							id={ this.props.match.id } />
					</fieldset>
				</form>
			</div>
		);
	}
});