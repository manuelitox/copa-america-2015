var React, Teams, Results;

React = require('react');
Teams = require('../teams/base.jsx');
Results = require('../matches/results.jsx');

module.exports = React.createClass({ 
	mixins: [Results],
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