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
		return { 
			data: []
		};
	},
	componentDidMount: function() {
		this.loadResolutionsFromServer();
	},	
 	render: function() {
 		var daysNode, group = this.props.group;
 		daysNode = this.state.data.map(function (daysMatches, index) {
			return (
				<div key={ index } className="by-day">
					<header className="matches--header">
						<h2>{ daysMatches.date }</h2>
					</header>
					<ByDay
						group={ group } 
						day={ daysMatches } />			
				</div>	
			);
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