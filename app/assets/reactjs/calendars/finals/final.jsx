var React, Title;

React = require('react');
Title = require('./title.jsx');

module.exports = React.createClass({	 
	getInitialState: function() {
		return ({  
			title: 'Final'
		});
	},	 		
	render: function() {
		return (
			<div className="final--end">
				<Title title={ this.state.title } />
				<p>Hola soy soy la final.</p>			
			</div>
		);
	}
});