import { useThemeStore } from '@stores/theme-store';
import { Tabs } from 'expo-router';
import {
	Bookmark,
	Home,
	Search,
	UserCircle2,
} from 'lucide-react-native';
export default function TabLayout() {
	const { activeTheme } = useThemeStore();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				animation: 'fade',
				sceneStyle: { backgroundColor: 'transparent' },
				tabBarActiveTintColor:
					activeTheme.color.primaryContent,
				tabBarInactiveTintColor: activeTheme.color.content,
				tabBarStyle: {
					borderTopWidth: 0,
					elevation: 0, // Android
					shadowOpacity: 0, // iOS
					backgroundColor: activeTheme.color.shade,
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ size, focused }) => (
						<Home
							color={
								focused
									? activeTheme.color.primaryContent
									: activeTheme.color.content
							}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ size, focused }) => (
						<Search
							color={
								focused
									? activeTheme.color.primaryContent
									: activeTheme.color.content
							}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='mylists'
				options={{
					title: 'My lists',
					tabBarIcon: ({ size, focused }) => (
						<Bookmark
							color={
								focused
									? activeTheme.color.primaryContent
									: activeTheme.color.content
							}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='account'
				options={{
					title: 'Account',
					tabBarIcon: ({ size, focused }) => (
						<UserCircle2
							color={
								focused
									? activeTheme.color.primaryContent
									: activeTheme.color.content
							}
							size={size}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
