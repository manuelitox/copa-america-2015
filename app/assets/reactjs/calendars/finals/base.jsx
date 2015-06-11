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
	render: function() {
		return (
			<section className="final-phase">
				<QuarterFinals />
				<SemiFinals />
				<ThirdPlace />
				<Final />
			</section>
		);
	}
});