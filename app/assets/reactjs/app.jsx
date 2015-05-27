var React, Teams;

React = require('react');
Teams = require('./teams/base.jsx');

var foo = { "codename": "VEN", "country": "venezuela" };


APP = React.createClass({		
	render: function() {
		return (
			<Teams team={ foo } />	
		);
	}
});

React.render(
	<APP />,
	document.body
);