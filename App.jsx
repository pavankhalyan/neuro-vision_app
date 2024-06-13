import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AmbulanceLoginScreen from './src/AmbulanceLoginScreen';
import PoliceLoginScreen from './src/PoliceLoginScreen';
import AmbulanceHomeScreen from './src/AmbulanceHomeScreen';
import PoliceHomeScreen from './src/PoliceHomeScreen';

const Stack = createStackNavigator();

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
        <Stack.Screen name="AmbulanceHomeScreen" component={AmbulanceHomeScreen} />
        <Stack.Screen name="PoliceHomeScreen" component={PoliceHomeScreen} />
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
