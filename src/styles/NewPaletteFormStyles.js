import { DRAWER_WIDTH } from '../constants';
// import sizes from './sizes';
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},

	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
		'& h4': {
			marginRight: '0.5rem'
		}
	},
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 64px)',
		padding: '0',
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
		// '@media (max-width: 600px)': {
		// 	paddingTop: '9px'
		// }
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	drawerContent: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 auto'
	},
	buttons: {
		width: '100%'
	},
	button: {
		width: '50%'
	}
});

export default styles;
