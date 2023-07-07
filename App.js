import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './src/views/screens/DetailsScreen';
import HomeScreen from './src/views/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;