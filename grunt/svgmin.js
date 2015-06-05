module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: 'app/assets/graphics/svgs',
				src: ['*.svg'],
				dest: 'app/assets/graphics/sources'
			}
		]
	}
};