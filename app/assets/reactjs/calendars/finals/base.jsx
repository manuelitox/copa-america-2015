var React, QuarterFinals, SemiFinals, ThirdPlace, Final;

React         = require('react');
QuarterFinals = require('./quarter-finals.jsx');
SemiFinals    = require('./semi-finals.jsx');
ThirdPlace    = require('./third-place.jsx');
Final         = require('./final.jsx');

module.exports = React.createClass({	
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