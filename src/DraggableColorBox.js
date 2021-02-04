import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		/* -3.5px in solution */
		marginBottom: '-4px',

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

function Draggablecolorbox(props) {
	const { classes } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: props.color }}>
			<div className={classes.boxContent}>
				<span>{props.name}</span>
				<DeleteIcon className={classes.delete} />
			</div>
		</div>
	);
}
export default withStyles(styles)(Draggablecolorbox);
