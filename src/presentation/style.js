
import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
		backgroundColor: '#23243d'
  },
	page: {
		width: '100%',
		height: '100dvh'
	},
	chatbox: {
		position: 'absolute',
		width: '100%',
		height: 'calc(100% - 40px)',
		overflow: 'auto'
	},
	messagebar: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		heigh: '40px',
		backgroundColor: '#353657',
		display: 'flex'
	},
	messageinput: {
		width: 'calc(100% - 40px)',
		border: 0,
		height: '40px',
		paddingLeft: '10px',
		backgroundColor: 'transparent'
	},
	sendButton: {
		width: 40,
		borderWidth: 0,
		borderRadius: 0,
		backgroundColor: 'transparent',
		color: 'white',
		cursor: 'pointer'
	}
});