module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'app/graphics/sources',
			src: ['*.svg', '*.png'],
			dest: 'app/graphics/output'
		}],
		options: {
			enhanceSVG: true
		}		
	}
};