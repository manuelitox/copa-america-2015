var React, SelectGroup;

React = require('react');

module.exports = React.createClass({
 	render: function() {
 		return (
 			<nav>
 				<ul>
					<li><button data-section="calendar" onClick={ this.props.section }>Calendario</button></li>
					<li><button data-section="groups" onClick={ this.props.section }>Grupos</button></li>
					<li><button data-section="final" onClick={ this.props.section }>Fase final</button></li> 					
 				</ul>
 			</nav>
 		);
	}
});