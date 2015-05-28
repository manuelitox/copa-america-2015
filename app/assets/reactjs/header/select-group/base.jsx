var React;

React = require('react');

module.exports = React.createClass({ 
 	render: function() {
 		return (
 			<div className="select-group">
 				<button data-group="A" onClick={ this.props.group }>Grupo A</button>
 				<button data-group="B" onClick={ this.props.group }>Grupo B</button>
 				<button data-group="C" onClick={ this.props.group }>Grupo C</button>
 			</div>
 		);
	}
});