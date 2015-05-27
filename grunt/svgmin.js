module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: 'app/graphics/svgs',
				src: ['*.svg'],
				dest: 'app/graphics/sources'
			}
		]
	}
};