var React, QuarterFinals, SemiFinals, ThirdPlace, Final;

React         = require('react');
QuarterFinals = require('./quarter-finals.jsx');
SemiFinals    = require('./semi-finals.jsx');
ThirdPlace    = require('./third-place.jsx');
Final         = require('./final.jsx');

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
	render: function() {
		console.log(this.state.groups);
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