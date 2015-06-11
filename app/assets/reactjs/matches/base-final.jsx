var React, FormTeam, Results;

React = require('react');
FormTeam = require('./form-team.jsx');
Results = require('./results.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			goalsLocal: null,
			goalsVisitor: null,
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
		return (
			<div className="match">
				<form className="match--form" name={ this.props.match.id }>
					<fieldset>
						<div className="match--date">
							<span className="match--date-day">{ this.props.match.date }</span>|<span className="match--date-time">{ this.props.match.time }</span>
						</div>					
						<FormTeam
							type="local"
							team={ this.props.match.local } 
							setGoals={ this.setGoalsLocal }
							goals={ this.state.goalsLocal }  
							id={ this.props.match.id } />
						<FormTeam
							type="visitor"
							team={ this.props.match.visitor } 
							setGoals={ this.setGoalsVisitor }
							goals={ this.state.goalsVisitor }
							id={ this.props.match.id } />
					</fieldset>
				</form>
			</div>
		);
	}
});