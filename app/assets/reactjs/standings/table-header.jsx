var React, Teams;

React = require('react');

module.exports = React.createClass({ 
 	render: function() {
		return (
			<thead>
				<tr>
					<th>Equipos</th>
					<th>P</th>
					<th>V</th>
					<th>E</th>
					<th>D</th>
					<th>Goles</th>
					<th>DG</th>
					<th>Pts</th>
				</tr>
			</thead>
		);
	}
});