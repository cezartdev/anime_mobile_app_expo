import { useThemeStore } from '@stores/theme-store';
import type { TColor, TSize, TWeight } from '@themes/types';
import {
	Text as RnText,
	type StyleProp,
	StyleSheet,
	type TextStyle,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

interface IText {
	children?: React.ReactNode;
	weight?: keyof TWeight;
	size?: keyof TSize;
	color?: keyof TColor;
	style?: StyleProp<TextStyle>;
}

export default function Text({
	children,
	size = 'md',
	weight = 'normal',
	color = 'content',
	style,
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

	return (
		<RnText style={[style, styles.text]}>{children}</RnText>
	);
}
