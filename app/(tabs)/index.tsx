import Text from '@components/atoms/text';
import View from '@components/atoms/view';
import { useThemeStore } from '@stores/theme-store';
export default function TabOneScreen() {
	const { activeThemeName, activeTheme } = useThemeStore();

	return (
		<View horizontal='xl'>
			<Text weight='black' size='xl'>
				Light y j
			</Text>
			<Text weight='black' size='lg'>
				Light y j
			</Text>
			<Text weight='bold' size='md'>
				Light y j
			</Text>
			<Text weight='bold' size='sm'>
				Light y j
			</Text>
			<Text weight='normal' size='xs'>
				Light y j
			</Text>
			<Text weight='normal' size='xxs'>
				Light y j
			</Text>

			<Text weight='black' size='md'>
				Theme: {activeThemeName}
			</Text>

			<Text weight='bold' size='md' color='primaryContent'>
				Primary color: {activeTheme.color.primaryContent}
			</Text>
		</View>
	);
}
