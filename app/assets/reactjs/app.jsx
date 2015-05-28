var React, Header, CalendarGroups, Standings;

React          = require('react');
CalendarGroups = require('./calendars/groups/base.jsx');
Standings      = require('./standings/base.jsx');
Header 				 = require('./header/base.jsx');

APP = React.createClass({	
	render: function() {
		return (
			<div>
				<Header />
				<CalendarGroups url="data/calendar.json" />
				<Standings url="data/teams.json" />
			</div>
		);
	}
});

React.render(
	<APP />,
	document.body
);