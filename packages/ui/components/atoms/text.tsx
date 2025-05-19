import { Text as RnText, StyleSheet } from 'react-native';
import { useThemeStore } from '@stores/theme-store';
import type { TWeight, TSize } from '@themes/types';
import { useResponsive } from 'react-native-responsive-hook';
interface IText {
	children: React.ReactNode;
	weight: keyof TWeight;
	size: keyof TSize;
}

export default function Text({
	children,
	size,
	weight,
}: IText) {
	const { rem } = useResponsive();
	const { activeTheme } = useThemeStore();

	const styles = StyleSheet.create({
		text: {
			fontSize: rem(activeTheme.font.size[size]),
			fontFamily: activeTheme.font.weight[weight],
			lineHeight: activeTheme.font.leading[size],
		},
	});

	return <RnText style={styles.text}>{children}</RnText>;
}
