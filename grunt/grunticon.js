module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'app/assets/graphics/sources',
			src: ['*.svg', '*.png'],
			dest: 'app/assets/graphics/output'
		}],
		options: {
			enhanceSVG: true
		}		
	}
};