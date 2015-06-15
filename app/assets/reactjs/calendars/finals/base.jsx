var React, QuarterFinals, SemiFinals, ThirdPlace, Final, Stats;

React         = require('react');
QuarterFinals = require('./quarter-finals.jsx');
SemiFinals    = require('./semi-finals.jsx');
ThirdPlace    = require('./third-place.jsx');
Final         = require('./final.jsx');
Stats         = require('../../standings/stats.jsx');

module.exports = React.createClass({
	loadResolutionsFromServer: function() {
		var _this = this;
		this.props.urls.map(function (url, index) {		
			$.ajax({
				url: url,
				dataType: 'json',
				cache: false,
				success: function(data) {
					index == 0 ? _this.setState({ calendar : data }) : _this.setState({ groups: data });
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(url, status, err.toString());
				}.bind(this)			
			});
		});
	},
	getInitialState: function() {
		return { calendar: [], groups: [] };
	},	
	filterByType: function(type) {
		var newMatches = [];
		this.state.calendar.map(function (matches) {
			matches.belong_to == type ? newMatches.push(matches) : null;
		});
		return newMatches;
	},	
	componentDidMount: function() {
		this.loadResolutionsFromServer();
	},
	isNotCompleted: function() {
		return localStorage.length >= 18 ? 'final-phase' : 'final-phase disabled';
	},
	getGroups: function () {
		var _this = this, groups = { a : [], b : [], c: [] };
		this.state.groups.map(function (group) {
			group.belong_to === 'A' ? groups.a.push(_this.getTeams(group.teams)) : null;
			group.belong_to === 'B' ? groups.b.push(_this.getTeams(group.teams)) : null;
			group.belong_to === 'C' ? groups.c.push(_this.getTeams(group.teams)) : null;			
		});
		this.storeLS(groups);
	},
	getTeams: function (teams) {
		return Stats.addStats(teams);
	},
	storeLS: function (groups) {
		localStorage.setItem('groups', JSON.stringify(groups));
	},
	render: function() {
		this.getGroups()
		return (
			<section className={ this.isNotCompleted() }>
				<QuarterFinals matches={ this.filterByType('Quarter final') } />
				<SemiFinals matches={ this.filterByType('Semi finals') } />
				<ThirdPlace matches={ this.filterByType('Third-place') } />
				<Final matches={ this.filterByType('Final') } />
			</section>
		);
	}
});