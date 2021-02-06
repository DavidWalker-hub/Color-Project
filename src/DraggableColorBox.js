import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';

const Draggablecolorbox = SortableElement((props) => {
	const { classes, handleClick, name, color } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.delete} onClick={handleClick} />
			</div>
		</div>
	);
});
export default withStyles(styles)(Draggablecolorbox);
