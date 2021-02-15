import sizes from './sizes';
const styles = {
	root: {
		backgroundColor: 'green',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '60%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('md')]: {
			width: '70%'
		},
		[sizes.down('xs')]: {
			width: '60%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		'& a': {
			color: 'white'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '1.5rem',
		[sizes.down('sm')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)'
		}
	}
};

export default styles;
