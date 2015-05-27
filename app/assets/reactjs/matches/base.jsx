var React, FormTeam;

React = require('react');
FormTeam = require('./form-team.jsx');

// ----------
// example data
var exampleMatch = {
	'time': '23:00',
	local: { "codename": "ARG", "country": "argentina" },
	visitante: { "codename": "CHI", "country": "chile" }
};

module.exports = React.createClass({ 
 	render: function() {
		return (
			<div className="match">
				<form className="match--form">
					<fieldset>
						<FormTeam team={ exampleMatch.local } />
						<span className="match--time">{ exampleMatch.time }</span>
						<FormTeam team={ exampleMatch.visitante } />
					</fieldset>
				</form>
			</div>
		);
	}
});