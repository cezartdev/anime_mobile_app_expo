import { useThemeStore } from '@stores/theme-store';
import type { TSize } from '@themes/types';
import { View as RnView, StyleSheet } from 'react-native';

interface IView {
	children: React.ReactNode;
	horizontal: keyof TSize;
}

export default function View({
	children,
	horizontal,
}: IView) {
	const { activeTheme } = useThemeStore();

	const styles = StyleSheet.create({
		container: {
			paddingHorizontal: activeTheme.spacing[horizontal],
		},
	});

	return (
		<RnView style={styles.container}>{children}</RnView>
	);
}
