var React, SelectGroup;

React = require('react');

module.exports = React.createClass({
	isActive: function(element) {
		return this.props.currentSection == element ? 'actived' : null;
	},
 	render: function() {
 		return (
 			<nav className="navigation">
 				<ul>
					<li className={ this.isActive('calendar') }>
						<button data-section="calendar" onClick={ this.props.section.bind(null, 'calendar') }>
							<span className="icon-calendar" data-grunticon-embed></span>
						</button>
					</li>
					<li className={ this.isActive('groups') }>
						<button data-section="groups" onClick={ this.props.section.bind(null, 'groups') }>
							<span className="icon-standings" data-grunticon-embed></span>
						</button>
					</li>
					<li className={ this.isActive('final') }>
						<button data-section="final" onClick={ this.props.section.bind(null, 'final') }>
							<span className="icon-final" data-grunticon-embed></span>
						</button>
					</li>
 				</ul>
 			</nav>
 		);
	}
});