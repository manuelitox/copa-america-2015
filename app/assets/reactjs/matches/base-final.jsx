var React, FormTeam, Checking;

React    = require('react');
FormTeam = require('./form-team.jsx');
Checking  = require('./checking.jsx');

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
	storageLS: function() {
		localStorage.setItem(
			'CF'+[this.props.match.id], 
			JSON.stringify(Checking.winnerFinalPhase(this.props.match, this.state.goalsLocal, this.state.goalsVisitor))
		);
	},
 	render: function() {
 		var _this = this;
 		if (this.state.isActive) {
 				_this.storageLS()
	 	} 		
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