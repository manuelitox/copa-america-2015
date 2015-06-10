var React, Title;

React = require('react');
Title = require('./title.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Semifinales'
		});
	},	 	
	render: function() {
		return (
			<div className="final--semi">
				<Title title={ this.state.title } />
				<p>Hola soy soy la semifinal.</p>			
			</div>
		);
	}
});