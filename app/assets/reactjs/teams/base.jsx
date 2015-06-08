var React, Flag;

React = require('react');
Flag 	= require('./flag.jsx');

module.exports = React.createClass({ 
	getInitialState: function () {
		return ({ type: this.props.type ? this.props.type : 'local' });
	},
 	render: function() {
 		var nodeFlag, nodeCodename;
 		nodeFlag     = <Flag country={ this.props.team.country } />;
 		nodeCodename = <h3 className="team--codename">{ this.props.team.codename }</h3>;
		return (
			<div className="team">
				{ this.state.type == 'local' ? nodeFlag : nodeCodename }
				{ this.state.type == 'local' ? nodeCodename : nodeFlag }				
			</div>
		);
	}
});