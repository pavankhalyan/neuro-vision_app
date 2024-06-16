import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AmbulanceLoginScreen from './src/AmbulanceLoginScreen';
import PoliceLoginScreen from './src/PoliceLoginScreen';
import AmbulanceHomeScreen from './src/AmbulanceHomeScreen';
import PoliceHomeScreen from './src/PoliceHomeScreen';
import AmbLocationScreen from './src/AmbLocationScreen';
import ProfileAmbScreen from './src/ProfileAmbScreen';
import PoliceProfileScreen from './src/PoliceProfileScreen'; 
import PoliceLocationScreen from './src/PoliceLocationScreen';


const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.ask}>Are you a?</Text>
      <TouchableOpacity
        style={styles.buttoncontainer1}
        onPress={() => navigation.navigate('Driver Details')}
      >
        <Text style={styles.driver}>Ambulance Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttoncontainer2}
        onPress={() => navigation.navigate('Police Details')}
      >
        <Text style={styles.police}>Traffic Police</Text>
      </TouchableOpacity>
    </View>
  );
}

function AmbulanceTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      <Tab.Screen name="Home" component={AmbulanceHomeScreen} />
      <Tab.Screen name="Location" component={AmbLocationScreen} />
      <Tab.Screen name="Profile" component={ProfileAmbScreen}/>
    </Tab.Navigator>
  );
}

function PoliceTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      <Tab.Screen name="Home" component={PoliceHomeScreen} />
      <Tab.Screen name="Location" component={PoliceLocationScreen} />
      <Tab.Screen name="Profile" component={PoliceProfileScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Driver Details" component={AmbulanceLoginScreen} />
        <Stack.Screen name="Police Details" component={PoliceLoginScreen} />
        <Stack.Screen name="AmbulanceHomeScreen" component={AmbulanceTabs} options={{ headerShown: false }} />
        <Stack.Screen name="PoliceHomeScreen" component={PoliceTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ask: {
    fontSize: 40,
    marginBottom: 40,
  },
  buttoncontainer1: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#7a7676',
    alignItems: 'center',
    width: 250,
    marginVertical: 10,
    borderRadius: 18,
  },
  driver: {
    fontSize: 25,
  },
  buttoncontainer2: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#7a7676',
    alignItems: 'center',
    width: 250,
    marginVertical: 20,
    borderRadius: 18,
  },
  police: {
    fontSize: 25,
  },
});
