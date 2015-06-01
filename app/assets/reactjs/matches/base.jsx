var React, FormTeam;

React = require('react');
FormTeam = require('./form-team.jsx');

module.exports = React.createClass({ 
 	render: function() {
		return (
			<div className="match">
				<form className="match--form" name={ this.props.match.id }>
					<fieldset>
						<FormTeam belongMatch={ this.props.match.id } team={ this.props.match.local } type="local" />
						<span className="match--time">{ this.props.match.time }</span>
						<FormTeam belongMatch={ this.props.match.id } team={ this.props.match.visitante } type="visitante" />
					</fieldset>
				</form>
			</div>
		);
	}
});