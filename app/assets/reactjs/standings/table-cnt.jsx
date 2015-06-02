var React, Teams;

React = require('react');
Teams = require('../teams/base.jsx');

module.exports = React.createClass({ 
 	render: function() {
 		var teamsNode; 
		teamsNode = this.props.teams.map(function (team, index) {
			return (
				<tr key={ index }>
					<td>
						<Teams team={ team } />
					</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>					
				</tr>
			);
		});
		return (
			<tbody>
				{ teamsNode }
			</tbody>	
		);
	}
});