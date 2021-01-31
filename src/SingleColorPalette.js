import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = { format: 'hex' };
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		const allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	}
	render() {
		const { format } = this.state;
		const shadeBoxes = this._shades.map((color) => (
			<ColorBox background={color[format]} key={color.name} name={color.name} showLink={false} />
		));
		return (
			<div className="Palette">
				<h1>Single Color Palette</h1>
				<div className="Palette-colors">{shadeBoxes}</div>
			</div>
		);
	}
}

export default SingleColorPalette;
