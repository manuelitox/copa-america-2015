var React, SelectGroup, Navigation;

React       = require('react');
SelectGroup = require('./select-group/base.jsx');
Navigation  = require('./navigation/base.jsx');

module.exports = React.createClass({
 	render: function() {
 		var nodeSelectGroup;
 		nodeSelectGroup = <SelectGroup currentGroup={ this.props.currentGroup } group={ this.props.group } />
 		return (
 			<header className="header-main">
 				{ this.props.currentSection == 'calendar' ? nodeSelectGroup : null }
 				{ this.props.currentSection == 'groups' ? nodeSelectGroup : null }
 				{ this.props.currentSection == 'final' ? <h3>Fase Final</h3> : null }
 				<Navigation currentSection={ this.props.currentSection } section={ this.props.section } />
 			</header>
 		);
	}
});