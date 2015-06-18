var React, Header, CalendarGroups, Standings, FinalPhase;

React          = require('react');
CalendarGroups = require('./calendars/groups/base.jsx');
Standings      = require('./standings/base.jsx');
Header         = require('./header/base.jsx');
FinalPhase     = require('./calendars/finals/base.jsx');

APP = React.createClass({	
	getInitialState: function() {
		return { 
			group: "A",
			section: "calendar",
			calendarUrl: 'data/calendar.json',
			teamsUrl: 'data/teams.json',
			finalUrls: [ 'data/final-calendar.json', 'data/teams.json' ]
		};
	}, 	
	setGroup: function(e) {
		this.setState({ group: e.target.dataset.group });
	},
	setSection: function(section) {
		this.setState({ section: section });
	},
	render: function() {
		return (
			<div className="wrap">
				<Header 
					currentSection={ this.state.section } section={ this.setSection } 
					currentGroup={ this.state.group } group={ this.setGroup } />
				<main>
					{ this.state.section == 'calendar' ? <CalendarGroups group={ this.state.group } url={ this.state.calendarUrl } /> : null }
					{ this.state.section == 'groups' ? <Standings group={ this.state.group } url={ this.state.teamsUrl } /> : null }
					{ this.state.section == 'final' ? <FinalPhase urls={ this.state.finalUrls } section={ this.setSection } /> : null }
				</main>
				<footer>
					<p>Hecho con <span className="icon-love"></span> por <a href="http://manuelitox.com" target="_blank">Manuelitox</a></p>
				</footer>
			</div>
		);
	}
});

React.render(
	<APP />,
	document.body
);