var React, Teams;

React   = require('react');
Teams   = require('../teams/base.jsx');

module.exports = React.createClass({
 	render: function() {
 		var nodeInput, nodeLabel;
 		nodeLabel = <label htmlFor={ this.props.team.codename }><Teams team={ this.props.team } type={ this.props.type } /></label>;
 		nodeInput = <input 
									type="number" 
									id={ this.props.team.codename } 
									name={ this.props.team.codename }
									placeholder="0"
									value={ this.props.goals }
									onChange={ this.props.setGoals } />;
		return (
			<div className="match--form--team">
				{ this.props.type == 'local' ? nodeLabel : nodeInput }
				{ this.props.type == 'local' ? nodeInput : nodeLabel }
			</div>
		);
	},	
});