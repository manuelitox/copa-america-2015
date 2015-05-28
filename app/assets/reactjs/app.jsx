var React, CalendarGroups; 

React = require('react');
CalendarGroups = require('./calendars/groups/base.jsx');

APP = React.createClass({	
	render: function() {
		return (
			<CalendarGroups url="data/calendar.json" />
		);
	}
});

React.render(
	<APP />,
	document.body
);