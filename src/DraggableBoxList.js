import React from 'react';
import Draggablecolorbox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableBoxList = SortableContainer(({ colors, deleteBox }) => {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, i) => (
				<Draggablecolorbox
					index={i}
					key={color.name}
					color={color.color}
					name={color.name}
					handleClick={() => deleteBox(color.name)}
				/>
			))}
		</div>
	);
});

export default DraggableBoxList;
