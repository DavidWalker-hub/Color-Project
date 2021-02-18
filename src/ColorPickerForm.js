import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.formRef = React.createRef();
		this.state = { currentColor: 'teal', newColorName: '' };
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isUniqueColorName', (value) => {
			return this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
		});
		ValidatorForm.addValidationRule('isUniqueColor', (value) => {
			return this.props.colors.every(({ color }) => color !== this.state.currentColor);
		});
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit() {
		const newColor = { color: this.state.currentColor, name: this.state.newColorName };
		this.props.addNewColor(newColor);
		this.setState({ newColorName: '' });
	}

	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div className={classes.root}>
				<ChromePicker color={currentColor} onChange={this.updateCurrentColor} className={classes.picker} />

				<ValidatorForm onSubmit={this.handleSubmit} ref={this.formRef} instantValidate={false}>
					<TextValidator
						value={newColorName}
						name="newColorName"
						label="Color Name"
						variant="filled"
						margin="normal"
						className={classes.colorInput}
						onChange={this.handleChange}
						validators={[ 'required', 'isUniqueColorName', 'isUniqueColor' ]}
						errorMessages={[ 'Enter a color name', 'Color name must be unique', 'Color already used' ]}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						className={classes.addColor}
						style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
						disabled={paletteIsFull}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
