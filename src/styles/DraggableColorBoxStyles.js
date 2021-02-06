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
			transform: 'scale(1.5)'
		}
	},
	boxContent: {
		position: 'absolute',
		bottom: '0',
		left: '0',
		padding: '10px',
		/* width is 100% in colt solution */
		width: '100%',
		color: 'rgba(0, 0, 0, 0.5)',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	delete: {
		transition: 'all 0.3s ease-in-out'
	}
};

export default styles;
