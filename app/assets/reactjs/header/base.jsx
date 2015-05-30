var React, SelectGroup, Navigation;

React       = require('react');
SelectGroup = require('./select-group/base.jsx');
Navigation  = require('./navigation/base.jsx');

module.exports = React.createClass({
 	render: function() {
 		return (
 			<header>
 				<SelectGroup group={ this.props.group } />
 				<Navigation currentSection={ this.props.currentSection } section={ this.props.section } />
 			</header>
 		);
	}
});