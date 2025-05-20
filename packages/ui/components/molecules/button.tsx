import { useThemeStore } from '@stores/theme-store';
import {
	Pressable,
	type StyleProp,
	StyleSheet,
	type ViewStyle,
} from 'react-native';

import { useResponsive } from 'react-native-responsive-hook';

interface IButton {
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

export default function Button({
	children,
	style,
}: IButton) {
	const { activeTheme } = useThemeStore();
	const { rem } = useResponsive();

	const styles = StyleSheet.create({
		primary: {
			backgroundColor: activeTheme.color.primaryContent,
			borderRadius: 10,
			paddingHorizontal: rem(16),
			paddingVertical: rem(8),
			alignSelf: 'flex-start',
		},
	});

	return (
		<Pressable
			style={[style, styles.primary]}
			onPress={() => {
				console.log('Tap');
			}}
		>
			{children}
		</Pressable>
	);
}
