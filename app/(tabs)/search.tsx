import {
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default function Search() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Search</Text>

			<Pressable style={styles.button}>
				<Text>Button</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	button: {
		padding: 10,
		backgroundColor: 'red',
		borderRadius: 10,
	},
});
