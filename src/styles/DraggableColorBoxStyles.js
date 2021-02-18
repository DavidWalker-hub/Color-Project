import chroma from 'chroma-js';
import sizes from './sizes';
const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		/* -3.5px in solution */
		marginBottom: '-5px',

		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.5)',
			[sizes.down('sm')]: {
				transform: 'scale(1.2)'
			}
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '20%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '10%'
		},
		[sizes.down('sm')]: {
			width: '100%',
			height: '5%'
		}
	},
	boxContent: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		padding: '10px',
		/* width is 100% in colt solution */
		width: '100%',
		color: (props) => (chroma(props.color).luminance() <= 0.08 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)'),
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		[sizes.down('sm')]: {
			padding: '0 10px'
		}
	},
	delete: {
		transition: 'all 0.3s ease-in-out'
	}
};

export default styles;
