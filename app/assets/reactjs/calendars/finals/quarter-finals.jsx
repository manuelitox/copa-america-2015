var React, Title;

React = require('react');
Title = require('./title.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Cuartos de Final'
		});
	},	 	 	
	render: function() {
		return (
			<div className="final--quarter">
				<Title title={ this.state.title } />
				<p>Hola soy los cuartos de final.</p>
			</div>
		);
	}
});