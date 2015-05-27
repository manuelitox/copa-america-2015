module.exports = {
	options: {
		transform: [ require('grunt-react').browserify ]
	},
  dist: {
    files: {
    	'app/assets/js/app.js': ['app/assets/reactjs/app.jsx']
    }
	}	
}