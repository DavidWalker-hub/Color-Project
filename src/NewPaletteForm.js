import React, { Component } from 'react';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableBoxList from './DraggableBoxList';
import { arrayMove } from 'react-sortable-hoc';
import styles from './styles/NewPaletteFormStyles';

class Newpaletteform extends Component {
	static defaultProps = {
		maxColors: 20
	};

	constructor(props) {
		super(props);
		this.state = {
			open: true,
			colors: this.props.palettes[0].colors
		};

		this.addNewColor = this.addNewColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteBox = this.deleteBox.bind(this);
		this.clearColors = this.clearColors.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};
	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	addNewColor(newColor) {
		this.setState({
			colors: [ ...this.state.colors, newColor ]
		});
	}
	clearColors() {
		this.setState({
			colors: []
		});
	}
	addRandomColor() {
		const allColors = this.props.palettes.map((p) => p.colors).flat();
		const rand = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[rand];
		if (!this.state.colors.find((color) => color === randomColor)) {
			this.setState({
				colors: [ ...this.state.colors, randomColor ]
			});
		}
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit(newPalette) {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newPalette.colors = this.state.colors;
		this.props.savePalette(newPalette);
		this.props.history.push('/');
	}
	deleteBox(colorName) {
		const remainingColors = this.state.colors.filter((color) => color.name !== colorName);
		this.setState({
			colors: remainingColors
		});
	}
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}));
	};
	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const paletteIsFull = this.state.colors.length >= maxColors;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					handleSubmit={this.handleSubmit}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<Typography variant="h4">Design Your Palette</Typography>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.drawerContent}>
						<div className={classes.buttons}>
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
								onClick={this.clearColors}
							>
								Clear Palette
							</Button>

							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								onClick={this.addRandomColor}
								disabled={paletteIsFull}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm paletteIsFull={paletteIsFull} addNewColor={this.addNewColor} colors={colors} />
					</div>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableBoxList
						colors={this.state.colors}
						deleteBox={this.deleteBox}
						axis="xy"
						onSortEnd={this.onSortEnd}
						distance={5}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Newpaletteform);
