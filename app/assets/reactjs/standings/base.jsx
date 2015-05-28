var React, GenerateGroup, Teams;

React = require('react');
GenerateGroup = require('./generate-group.jsx');
Teams = require('../teams/base.jsx');

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
			group: "A"
		};
	},
	componentDidMount: function() {
		this.loadResolutionsFromServer();
	},	
 	render: function() {		
 		var groupNodes, group, groupId = this.state.group;
		function byGroup(value) {
			return value.belong_to == groupId ? value : "";
		}
		group = this.state.data.filter(byGroup);
		groupNodes = group.map(function (group, index) {
			return (
				<GenerateGroup key={ index } teams={ group.teams } />
			);
		});
		return (
			<div>
				<p>tabla</p>
				{ groupNodes }
			</div>
		);
	}
});