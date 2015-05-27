var React, Matches;

React = require('react');
Matches = require('./matches/base.jsx');

APP = React.createClass({		
	render: function() {
		return (
			<Matches />	
		);
	}
});

React.render(
	<APP />,
	document.body
);