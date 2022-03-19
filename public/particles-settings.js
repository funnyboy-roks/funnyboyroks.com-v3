particlesJS('particles-js', {
	'particles': {
		'number': {
			'value': 200,
			'density': {
				'enable': true,
				'value_area': 800,
			},
		},
		'color': {
			'value': '#00aa00',
		},
		'shape': {
			'type': 'circle',
			'stroke': {
				'width': 0,
				'color': '#000000',
			},
			'polygon': {
				'nb_sides': 5,
			},
		},
		'opacity': {
			'value': 0.5,
			'random': false,
			'anim': {
				'enable': false,
				'speed': 1,
				'opacity_min': 0.1,
				'sync': false,
			},
		},
		'size': {
			'value': 3,
			'random': true,
			'anim': {
				'enable': false,
			},
		},
		'line_linked': {
			'enable': true,
			'distance': 100,
			'color': '#55aa55',
			'opacity': 0.4,
			'width': 1,
		},
		'move': {
			'enable': true,
			'speed': 3,
			'direction': 'none',
			'random': false,
			'straight': false,
			'out_mode': 'out',
			'bounce': false,
			'attract': {
				'enable': false,
				'rotateX': 600,
				'rotateY': 1200,
			},
		},
	},
	'interactivity': {
		'detect_on': 'window',
		'events': {
			'onhover': {
				'enable': true,
				'mode': 'grab',
			},
			'onclick': {
				'enable': false,
				'mode': 'push',
			},
			'resize': true,
		},
		'modes': {
			'grab': {
				'distance': 140,
				'line_linked': {
					'opacity': 1,
				},
			},
		},
	},
	'retina_detect': true,
});
