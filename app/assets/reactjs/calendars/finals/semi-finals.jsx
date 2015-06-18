var React, Title, Matches;

React   = require('react');
Title   = require('./title.jsx');
Matches = require('../../matches/base-final.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return ({  
			title: 'Semifinales',
			enableRefresh: true			
		});
	},
	populateSemis: function(matches) {
		var CF1 = JSON.parse(localStorage.CF1),
				CF2 = JSON.parse(localStorage.CF2),
				CF3 = JSON.parse(localStorage.CF3),
				CF4 = JSON.parse(localStorage.CF4);				
		matches.map(function (match, index) {
			
			index == 0 ? match.matches[0].local = CF1.winner : null;
			index == 0 ? match.matches[0].visitor = CF2.winner : null;

			index == 1 ? match.matches[0].local = CF3.winner : null;
			index == 1 ? match.matches[0].visitor = CF4.winner : null;

		});
	},	 	
	render: function() {
		if (localStorage.CF4 != undefined) {
			this.populateSemis(this.props.matches);
		}
		var matchesNode, section = this.props.section, enableRefresh = this.state.enableRefresh;
		matchesNode = this.props.matches.map(function (match, index) {
			return ( 
				<Matches 
					key={ index } 
					identify={ index } 
					match={ match.matches[0] } 
					type='SF' 
					section={ section } 
					enableRefresh={ enableRefresh } /> 
			);
		});		
		return (
			<div className="final--semi">
				<Title title={ this.state.title } />
				{ matchesNode }
			</div>
		);
	}
});