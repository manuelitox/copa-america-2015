var React, FormTeam;

React = require('react');
FormTeam = require('./form-team.jsx');

module.exports = React.createClass({ 
 	render: function() {
		return (
			<div className="match">
				<form className="match--form">
					<fieldset>
						<FormTeam team={ this.props.match.local } />
						<span className="match--time">{ this.props.match.time }</span>
						<FormTeam team={ this.props.match.visitante } />
					</fieldset>
				</form>
			</div>
		);
	}
});