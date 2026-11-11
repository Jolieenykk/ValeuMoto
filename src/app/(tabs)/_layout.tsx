import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { flexDirection: 'row' },
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#c3076e',
        tabBarInactiveBackgroundColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="recarga"
        options={{
          title: 'Recarga',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="credit-card" size={size} color={'#8D1A5C'} />
          ),
        }}
      />
      <Tabs.Screen
        name="sugestoes"
        options={{
          title: 'Sugestões',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="feedback" size={size} color={'#8D1A5C'} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={'#8D1A5C'} />
          ),
        }}
      />
      <Tabs.Screen
        name="telaLogin"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
