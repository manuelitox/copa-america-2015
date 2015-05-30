var React, Header, CalendarGroups, Standings;

React          = require('react');
CalendarGroups = require('./calendars/groups/base.jsx');
Standings      = require('./standings/base.jsx');
Header 				 = require('./header/base.jsx');

APP = React.createClass({	
	getInitialState: function() {
		return { 
			group: "A",
			section: "calendar"
		};
	}, 	
	setGroup: function(e) {
		this.setState({ group: e.target.dataset.group });
	},
	setSection: function(e) {
		this.setState({ section: e.target.dataset.section });
	},
	render: function() {
		return (
			<div>
				<Header currentSection={ this.state.section } section={ this.setSection } group={ this.setGroup } />
				{ this.state.section == 'calendar' ? <CalendarGroups group={ this.state.group } url="data/calendar.json" /> : null }
				{ this.state.section == 'groups' ? <Standings group={ this.state.group } url="data/teams.json" /> : null }
				{ this.state.section == 'final' ? "fase final" : null }
			</div>
		);
	}
});

React.render(
	<APP />,
	document.body
);