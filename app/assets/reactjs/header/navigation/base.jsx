var React, SelectGroup;

React = require('react');

module.exports = React.createClass({
 	render: function() {
 		console.log(this.props.currentSection);
 		return (
 			<nav>
 				<ul>
					<li className={ this.props.currentSection == 'calendar' ? 'actived' : null }>
						<button data-section="calendar" onClick={ this.props.section }>Calendario</button>
					</li>
					<li className={ this.props.currentSection == 'groups' ? 'actived' : null }>
						<button data-section="groups" onClick={ this.props.section }>Grupos</button>
					</li>
					<li className={ this.props.currentSection == 'final' ? 'actived' : null }>
						<button data-section="final" onClick={ this.props.section }>Fase final</button>
					</li>
 				</ul>
 			</nav>
 		);
	}
});