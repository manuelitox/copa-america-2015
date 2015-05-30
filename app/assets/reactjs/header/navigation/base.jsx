var React, SelectGroup;

React = require('react');

module.exports = React.createClass({
	isActive: function(element) {
		return this.props.currentSection == element ? 'actived' : null;
	},
 	render: function() {
 		console.log(this.props.currentSection);
 		return (
 			<nav>
 				<ul>
					<li className={ this.isActive('calendar') }>
						<button data-section="calendar" onClick={ this.props.section }>Calendario</button>
					</li>
					<li className={ this.isActive('groups') }>
						<button data-section="groups" onClick={ this.props.section }>Grupos</button>
					</li>
					<li className={ this.isActive('final') }>
						<button data-section="final" onClick={ this.props.section }>Fase final</button>
					</li>
 				</ul>
 			</nav>
 		);
	}
});