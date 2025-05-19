import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false, animation: 'fade' }}>
			<Tabs.Screen name='index' />
			<Tabs.Screen name='two' />
		</Tabs>
	);
}
