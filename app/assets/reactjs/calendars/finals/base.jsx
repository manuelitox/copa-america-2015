var React, QuarterFinals, SemiFinals, ThirdPlace, Final;

React         = require('react');
QuarterFinals = require('./quarter-finals.jsx');
SemiFinals    = require('./semi-finals.jsx');
ThirdPlace    = require('./third-place.jsx');
Final         = require('./final.jsx');

module.exports = React.createClass({
	loadResolutionsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)			
		});
	},
	getInitialState: function() {
		return { data: [] };
	},	
	componentDidMount: function() {
		this.loadResolutionsFromServer();
	},
	filterByType: function(type) {
		var newMatches = [];
		this.state.data.map(function (matches) {
			matches.belong_to == type ? newMatches.push(matches) : null;
		});
		return newMatches;
	},	
	render: function() {
		return (
			<section className="final-phase">
				<QuarterFinals matches={ this.filterByType('Quarter final') } />
				<SemiFinals matches={ this.filterByType('Semi finals') } />
				<ThirdPlace matches={ this.filterByType('Third-place') } />
				<Final matches={ this.filterByType('Final') } />
			</section>
		);
	}
});