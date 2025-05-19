import { View, StyleSheet } from 'react-native';
import Text from '@components/atoms/text';
export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text weight='black' size='xl'>Title 1</Text>
			<Text weight='black' size='lg'>Title 2</Text>
			<Text weight='bold' size='md'>Subtitle 1</Text>
			<Text weight='bold' size='sm'>Subtitle 2</Text>
			<Text weight='normal' size='xs'>Paragraph 1</Text>
			<Text weight='normal' size='xxs'>Paragraph 2</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
