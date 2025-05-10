import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#98002E', // Active tab color (red)
        tabBarInactiveTintColor: '#aaa', // Inactive tab color (gray)
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name="home"
              size={size}
              color={focused ? '#98002E' : '#aaa'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search', 
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="search"
              size={size}
              color={focused ? '#98002E' : '#aaa'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="appointment"
        options={{
          title: 'Appointment',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="calendar" 
              size={size}
              color={focused ? '#98002E' : '#aaa'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="person"
              size={size} 
              color={focused ? '#98002E' : '#aaa'}
            />
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
});        