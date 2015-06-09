var React, TableContent;

React        = require('react');
TableContent = require('./table-cnt.jsx');

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
 		var tableCntNode, tableCnt, groupId = this.props.group;
		function byGroup(value) {
			return value.belong_to == groupId ? value : "";
		}
		tableCnt = this.state.data.filter(byGroup);
		tableCntNode = tableCnt.map(function (group, index) {
			return (
				<TableContent key={ index } teams={ group.teams } />
			);
		});
		return (
			<section className="groups">
				<header className="titles">
					<h1>Tabla de Posiciones</h1>
				</header>
				{ tableCntNode }
			</section>
		);
	}
});