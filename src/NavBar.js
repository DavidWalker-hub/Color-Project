import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex', open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	handleFormatChange(evt) {
		this.setState({ format: evt.target.value, open: true });
		this.props.handleChange(evt.target.value);
	}
	closeSnackbar() {
		this.setState({ open: false });
	}
	render() {
		const { level, changeLevel, showSlider, classes } = this.props;
		const { format } = this.state;
		return (
			<header className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to="/">reactcolorpicker</Link>
				</div>
				{showSlider && (
					<div>
						<span>Level: {level}</span>
						<div className={classes.slider}>
							<Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
						</div>
					</div>
				)}
				<div className={classes.selectContainer}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={this.state.open}
					autoHideDuration={4000}
					message={<span id="message-id">Format changed! - {format.toUpperCase()}</span>}
					ContentProps={{ 'aria-describedby': 'message-id' }}
					onClose={this.closeSnackbar}
					action={[
						<IconButton
							size="small"
							aria-label="close"
							key="close"
							color="inherit"
							onClick={this.closeSnackbar}
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}

export default withStyles(styles)(NavBar);
