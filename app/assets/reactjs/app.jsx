var React, Header, CalendarGroups, Standings;

React          = require('react');
CalendarGroups = require('./calendars/groups/base.jsx');
Standings      = require('./standings/base.jsx');
Header 				 = require('./header/base.jsx');

APP = React.createClass({	
	getInitialState: function() {
		return { 
			group: "A"
		};
	}, 	
	setGroup: function(e) {
		this.setState({ group: e.target.dataset.group });
	},
	render: function() {
		console.log(this.state.group);
		return (
			<div>
				<Header group={ this.setGroup } />
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