var React, Title;

React = require('react');
Title = require('./title.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Tercer y Cuarto lugar'
		});
	},	 		
	render: function() {
		return (
			<div className="final--semi">
				<Title title={ this.state.title } />
				<p>Hola soy el 3er lugar.</p>
			</div>			
		);
	}
});