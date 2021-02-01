import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = { format: 'hex' };
		this.changeFormat = this.changeFormat.bind(this);
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		const allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const shadeBoxes = this._shades.map((color) => (
			<ColorBox background={color[format]} key={color.name} name={color.name} showLink={false} />
		));
		return (
			<div className="SingleColorPalette Palette">
				<NavBar handleChange={this.changeFormat} showSlider={false} />
				<div className="Palette-colors">
					{shadeBoxes}
					<div className="go-back ColorBox">
						<Link to={`/palette/${id}`} className="back-button">
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default SingleColorPalette;