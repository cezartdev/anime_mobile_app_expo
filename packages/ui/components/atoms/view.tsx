// import { useThemeStore } from '@stores/theme-store';
// import type { TSize } from '@themes/types';
import {
	View as RnView,
	type StyleProp,
	// StyleSheet,
	type ViewStyle,
	// type FlexAlignType,
} from 'react-native';
// import { useResponsive } from 'react-native-responsive-hook';

interface IView {
	children?: React.ReactNode;
	// variant: 'one' | 'two' | 'three' | 'free';
	// direction?: 'x' | 'y';
	// paddingHorizontal?: keyof TSize;
	// paddingVertical?: keyof TSize;
	// align?: FlexAlignType;
	style?: StyleProp<ViewStyle>;
}

export default function View({ children, style }: IView) {
	// const { rem } = useResponsive();
	// const { activeTheme } = useThemeStore();

	// const styles = StyleSheet.create({
	// 	free: {
	// 		flex: 1,
	// 		flexDirection: direction === 'x' ? 'row' : 'column',
	// 		alignItems: align,
	// 		flexWrap:'wrap',
	// 		paddingHorizontal: rem(activeTheme.spacing[paddingHorizontal]),
	// 		paddingVertical: rem(activeTheme.spacing[paddingVertical])
	// 	},
	// 	one:{

	// 	}
	// });

	return <RnView style={[style]}>{children}</RnView>;
}
