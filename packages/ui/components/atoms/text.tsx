import { useThemeStore } from '@stores/theme-store';
import type { TColor, TSize, TWeight } from '@themes/types';
import { Text as RnText, StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

interface IText {
	children: React.ReactNode;
	weight?: keyof TWeight;
	size?: keyof TSize;
	color?: keyof TColor;
}

export default function Text({
	children,
	size = 'md',
	weight = 'normal',
	color = 'content',
}: IText) {
	const { rem } = useResponsive();
	const { activeTheme } = useThemeStore();

	const styles = StyleSheet.create({
		text: {
			fontSize: rem(activeTheme.font.size[size]),
			fontFamily: activeTheme.font.weight[weight],
			lineHeight: activeTheme.font.leading[size],
			color: activeTheme.color[color],
		},
	});

	return <RnText style={styles.text}>{children}</RnText>;
}
