var React, Matches, ByDay;

React = require('react');
ByDay = require('./by-day.jsx');

Matches = require('../../matches/base.jsx');

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
		return { 
			data: [],	
		};
	},
	componentDidMount: function() {
		this.loadResolutionsFromServer();
	},	
 	render: function() {
 		var daysNode;
 		daysNode = this.state.data.map(function (daysMatches, index) {
			return (
				<div key={ index } className="by-day">
					<header className="matches--header">{ daysMatches.date }</header>
					<ByDay day={ daysMatches } />			
				</div>	
			);
		}); 		
		return (
			<section className="matches">
				{ daysNode }
			</section>
		);
	}
});