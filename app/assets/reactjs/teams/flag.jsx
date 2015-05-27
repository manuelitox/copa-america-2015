var React;

React = require('react');

module.exports = React.createClass({ 
	pathImage: function(name) {
		name = !name ? '1x' : name;
		return '/images/flags/'+this.props.country+'/'+name+'.png';
	},
	sourceSet: function() {
		return this.pathImage()+', '+this.pathImage('2x')+' 2x, '+this.pathImage('3x')+' 3x';
	},
 	render: function() {
		return (
			<figure className="team--flag">
				<picture>
					<source 
						srcSet={ this.sourceSet() } />			
					<img 
						src={ this.pathImage() } 
						height="34"
						width="34" />
				</picture>
			</figure>
		);
	}
});