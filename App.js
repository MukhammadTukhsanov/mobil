import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/views/screens/LoginScreen';
import LoginWithScreen from './src/views/screens/LogInWithScreen';
import RegistrationScreen from './src/views/screens/RegistrationScreen';
import CountriesScreen from './src/views/screens/CountriesScreen';
import InterestsScreen from './src/views/screens/InterestsScreen';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Text>sdfjknsdf sdkfjnkf kjsdfk sdfkjnk </Text>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LoginWithScreen' component={LoginWithScreen}/>
        <Stack.Screen name='InterestsScreen' component={InterestsScreen} />
        <Stack.Screen name='CountriesScreen' component={CountriesScreen} />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
