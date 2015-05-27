module.exports = {	
	dist: {
		options: {
			style: 'expanded' // Output style. Can be: nested, compact, compressed, expanded.
		},
		files: {
			// output path : .scss path
 			'app/assets/css/main.css': 'app/assets/scss/main.scss',
		}
	}
};