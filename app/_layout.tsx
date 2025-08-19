import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.tint,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: Colors.tint,
          drawerInactiveTintColor: '#666',
          drawerStyle: {
            backgroundColor: '#fff',
            width: 280,
          },
        }}>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Trang chủ',
            title: 'AI Chat App',
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="house.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="chat"
          options={{
            drawerLabel: 'Chat',
            title: 'AI Chat',
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="message.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Hồ sơ',
            title: 'Hồ sơ',
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="person.circle" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Cài đặt',
            title: 'Cài đặt',
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="gear" color={color} />
            ),
          }}
        />
      </Drawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
