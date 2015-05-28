var React, SelectGroup;

React       = require('react');
SelectGroup = require('./select-group/base.jsx');

module.exports = React.createClass({
 	render: function() {
 		return (
 			<header>
 				<SelectGroup group={ this.props.group } />
 				hola soy el header
 			</header>
 		);
	}
});