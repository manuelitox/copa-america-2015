var React;

React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="matches--header">
				<h2>{ this.props.title }</h2>
			</div>
		);
	}
});