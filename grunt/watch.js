module.exports = {
	options: {
		livereload: true,
	},			
	css: {
		files: '**/*.scss',
		tasks: ['sass']
	},
	js: {
		files: 'app/assets/js/*.js',
		tasks: ['uglify']
	},
	minifysvg: {
		files: ['app/graphics/svgs/*.svg'],
		tasks: ['svgmin']
	},
	icons: {
		files: ['app/graphics/sources/*.svg'],
		tasks: ['grunticon']
	},
	postcss: {
		files: ['app/assets/css/*.css'],
		tasks: ['postcss']
	},
	react: {
		files: 'app/assets/reactjs/**/*.jsx',
		tasks: ['browserify']
	}	
};