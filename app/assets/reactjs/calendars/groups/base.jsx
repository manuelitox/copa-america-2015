var React, ByDay;

React = require('react');
ByDay = require('./by-day.jsx');

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
	haveMatches: function(day, group) {
		var matches = [];
		day.matches.map(function (match, index) {
			match.belong_to === group ? matches.push(match) : false;
		});
		return matches.length;
	},	
	componentDidMount: function() {
		this.loadResolutionsFromServer();
	},	
 	render: function() {
 		var daysNode, 
 				group       = this.props.group,
 				haveMatches = this.haveMatches;
 		daysNode = this.state.data.map(function (daysMatches, index) {
			return haveMatches(daysMatches, group) >= 1 ?
				 (
					<div key={ index } className="by-day">
						<header className="matches--header">
							<h2>{ daysMatches.date }</h2>
						</header>
						<ByDay
							group={ group } 
							day={ daysMatches } />			
					</div>	
				)
			: null;
		}); 		
		return (
			<section className="matches">
				<header className="titles">
					<h1>Calendario Fase de Grupos</h1>
				</header>
				{ daysNode }
			</section>
		);
	}
});