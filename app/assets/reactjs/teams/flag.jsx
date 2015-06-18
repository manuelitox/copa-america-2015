var React;

React = require('react');

module.exports = React.createClass({ 
	classFlag: function() {
		return 'flag-'+this.props.country;
	},
 	render: function() {
		return (
			<div className="team--flag">
				<span className={ this.classFlag() }></span>
			</div>
		);
	}
});