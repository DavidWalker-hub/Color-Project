import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(level) {
		this.setState({
			level
		});
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color, i) => (
			<ColorBox background={color[format]} key={i} name={color.name} />
		));
		return (
			<div className="Palette">
				<NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
				{/* Navbar goes here */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer eventually */}
			</div>
		);
	}
}

export default Palette;
