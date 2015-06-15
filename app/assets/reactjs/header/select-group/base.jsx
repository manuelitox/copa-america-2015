var React;

React = require('react');

module.exports = React.createClass({ 
	getInitialState: function() {
		return {
			isActive: false
		};
	},
	toggle: function() {
		this.setState({ isActive: !this.state.isActive });
	},
	dinamycClasses: function () {
		return this.state.isActive ? 'select-group actived' : "select-group";
	},
 	render: function() {
 		return (
 			<div className={ this.dinamycClasses() } onClick={ this.toggle }>
 				<button className="select-group--current">
 					<div className="select-group--navicon"></div>
 					Grupo { this.props.currentGroup }
 				</button>
 				<ul className="select-group--list">
	 				{ this.props.currentGroup != 'A' ? <li><button data-group="A" onClick={ this.props.group }>Grupo A</button></li> : null }
	 				{ this.props.currentGroup != 'B' ? <li><button data-group="B" onClick={ this.props.group }>Grupo B</button></li> : null }
	 				{ this.props.currentGroup != 'C' ? <li><button data-group="C" onClick={ this.props.group }>Grupo C</button></li> : null }
 				</ul>
 			</div>
 		);
	}
});