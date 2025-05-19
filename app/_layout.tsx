import { useThemeStore } from '@stores/theme-store';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import '@env/config';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

// biome-ignore lint/style/useNamingConvention:
export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		latoRegular: require('../packages/ui/assets/fonts/Lato-Regular.ttf'),
		latoBold: require('../packages/ui/assets/fonts/Lato-Bold.ttf'),
		latoBlack: require('../packages/ui/assets/fonts/Lato-Black.ttf'),
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const { activeTheme } = useThemeStore();

	return (
		<SafeAreaView
			style={{ flex: 1 }}
			edges={['top', 'left', 'right']}
		>
			<Stack
				screenOptions={{
					headerShown: false,
					animation: 'slide_from_right',
					contentStyle: {
						backgroundColor: activeTheme.color.background,
					},
				}}
			>
				<Stack.Screen name='(tabs)' />
			</Stack>
			<StatusBar
				style='auto'
				backgroundColor={activeTheme.color.background}
			/>
		</SafeAreaView>
	);
}
