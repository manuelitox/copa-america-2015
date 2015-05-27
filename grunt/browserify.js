module.exports = {
	options: {
		transform: [ require('grunt-react').browserify ]
	},
  dist: {
    files: {
   //    'app/assets/js/commons.js': ['app/reactjs/header.jsx'],
			// 'app/assets/js/projects.js': ['app/reactjs/projects.jsx']      
    }
	}	
	// client: {
	// 	src: ['app/_components/**/*.jsx'],
	// 	dest: 'app/assets/js/frontest.built.js'
	// }	
}