var React, FormTeam, Checking;

React    = require('react');
FormTeam = require('./form-team.jsx');
Checking  = require('./checking.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			goalsLocal: this.findCF().local || 0,
			goalsVisitor: this.findCF().visitor || 0,
			isActive: false,
			isRefresh: false
		};
	},	
	setGoalsLocal: function(e) {
		this.setState({ 
			goalsLocal: e.target.value, 
			isActive: true,
			isRefresh: true
		});
	},
	setGoalsVisitor: function(e) {
		this.setState({ 
			goalsVisitor: e.target.value,
			isActive: true,
			isRefresh: true			
		});
	},
	setIsRefresh: function(e) {
		var section = this.props.section('final');
		this.setState({ isRefresh: false });
		section;
	},
	enableRefresh: function() {
		return this.state.isRefresh ? <button className="btn-refresh" onClick={ this.setIsRefresh }>Actualizar resultado</button> : null;
	},
	storageLS: function() {
		if (!Checking.winnerFinalPhase(this.props.match, this.state.goalsLocal, this.state.goalsVisitor)) {
			alert('¡No pueden quedar empatados!');
		} else {
			var identify = this.props.identify + 1;
			localStorage.setItem(
				this.props.type+[identify], 
				JSON.stringify(Checking.winnerFinalPhase(this.props.match, this.state.goalsLocal, this.state.goalsVisitor))
			);
		}
	},
	findCF: function() {
		var output = {};
		if (this.props.type == 'CF') {
			if (this.props.identify == 0) {
				output.local = JSON.parse(localStorage.CF1 || 0) !== 0 ? JSON.parse(localStorage.CF1).goalsLocal : null;
				output.visitor = JSON.parse(localStorage.CF1 || 0) !== 0 ? JSON.parse(localStorage.CF1).goalsVisitor : null;
			} else if (this.props.identify == 1) {
				output.local = JSON.parse(localStorage.CF2 || 0) !== 0 ? JSON.parse(localStorage.CF2).goalsLocal : null;
				output.visitor = JSON.parse(localStorage.CF2 || 0) !== 0 ? JSON.parse(localStorage.CF2).goalsVisitor : null;
			} else if (this.props.identify == 2) {
				output.local = JSON.parse(localStorage.CF3 || 0) !== 0 ? JSON.parse(localStorage.CF3).goalsLocal : null;
				output.visitor = JSON.parse(localStorage.CF3 || 0) !== 0 ? JSON.parse(localStorage.CF3).goalsVisitor : null;			
			} else if (this.props.identify == 3) {
				output.local = JSON.parse(localStorage.CF4 || 0) !== 0 ? JSON.parse(localStorage.CF4).goalsLocal : null;
				output.visitor = JSON.parse(localStorage.CF4 || 0) !== 0 ? JSON.parse(localStorage.CF4).goalsVisitor : null;			
			}			
		} else if (this.props.type == 'SF') {
			if (this.props.identify == 0) {
				output.local = JSON.parse(localStorage.SF1 || 0) !== 0 ? JSON.parse(localStorage.SF1).goalsLocal : null;
				output.visitor = JSON.parse(localStorage.SF1 || 0) !== 0 ? JSON.parse(localStorage.SF1).goalsVisitor : null;
			} else if (this.props.identify == 1) {
				output.local = JSON.parse(localStorage.SF2 || 0) !== 0 ? JSON.parse(localStorage.SF2).goalsLocal : null;
				output.visitor = JSON.parse(localStorage.SF2 || 0) !== 0 ? JSON.parse(localStorage.SF2).goalsVisitor : null;
			} 
		}
		return output;
	},
 	render: function() {
 		var _this = this;
 		if (this.state.isActive) {
 			_this.storageLS();
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
				{ this.props.enableRefresh ? this.enableRefresh() : null }				
			</div>
		);
	}
});