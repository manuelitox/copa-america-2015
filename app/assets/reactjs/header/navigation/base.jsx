var React, SelectGroup;

React = require('react');

module.exports = React.createClass({
 	render: function() {
 		return (
 			<nav>
 				<ul>
 					<li><button>Calendario</button></li>
 					<li><button>Grupos</button></li>
					<li><button>Fase final</button></li> 					
 				</ul>
 			</nav>
 		);
	}
});