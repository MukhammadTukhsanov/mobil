import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/views/screens/LoginScreen';
import LoginWithScreen from './src/views/screens/LogInWithScreen';
import RegistrationScreen from './src/views/screens/RegistrationScreen';
import CountriesScreen from './src/views/screens/CountriesScreen';
import InterestsScreen from './src/views/screens/InterestsScreen';
import ResetPasswordScreen from './src/views/screens/ResetPasswordScreen';
import CodeVerificationScreen from './src/views/screens/CodeVerificationScreen';
import CreateNewPassScreen from './src/views/screens/CreateNewPassScreen';
import CongratulationsScreen from './src/views/screens/CongratulationsScreen';
import { Onboarding } from './src/views/screens/OnboardingScreen';
import AddPhotosScreen from './src/views/screens/AddPhotosScreen';
import SelectIdealScreen from './src/views/screens/SelectIdealScreen';
// import HomeScreen from './src/views/screens/HomeScreen';
import MathScreen from './src/views/screens/MathScreen';
import NewMathScreen from './src/views/screens/NewMatchScreen';
import ChatsScreen from './src/views/screens/ChatsScreen';
import ChatTextScreen from './src/views/screens/ChatTextScreen';
import FillProfileScreen from './src/views/screens/FillProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './Global/Context';
import { COLORS } from './src/colors/colors';
import TabScreens from './src/views/components/tabScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      // <RootNavigator />
      <SafeAreaProvider>
        <AppProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='OnboardingScreen' component={Onboarding} options={{headerShown: false}} />
              <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{headerShown: false }} />
              <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
              <Stack.Screen name='HomeScreen' component={TabScreens} options={{headerShown: false}} />
              <Stack.Screen name='LoginWithScreen' component={LoginWithScreen} options={{headerShown: false}} />
              <Stack.Screen name='ChatTextScreen' component={ChatTextScreen} options={{headerShown: false}}/>
              <Stack.Screen name='AddPhotosScreen' component={AddPhotosScreen} options={{headerBackTitleVisible: false, title: '', headerTintColor: COLORS.black,headerShadowVisible: false}}/>
              <Stack.Screen name='InterestsScreen' component={InterestsScreen} options={{headerBackTitleVisible: false, title: '', headerTintColor: COLORS.black,headerShadowVisible: false}} />
              <Stack.Screen name='FillProfileScreen' component={FillProfileScreen} options={{headerBackTitleVisible: false, title: '', headerTintColor: COLORS.black, headerShadowVisible: false}} />
              <Stack.Screen name='ChatsScreen' component={ChatsScreen} />
              {/* <Stack.Screen name='NewMathScreen' component={NewMathScreen} /> */}
              <Stack.Screen name='MathScreen' component={MathScreen} />
              {/* <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} /> */}
              <Stack.Screen name='CountriesScreen' component={CountriesScreen} options={{headerShown: false}} />
              <Stack.Screen name='SelectIdealScreen' component={SelectIdealScreen} options={{headerBackTitleVisible: false, title: '', headerTintColor: COLORS.black,headerShadowVisible: false}} />
              <Stack.Screen name='CongratulationsScreen' component={CongratulationsScreen} />
              <Stack.Screen name='CreateNewPassScreen' component={CreateNewPassScreen} />
              <Stack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen} />
              <Stack.Screen name='CodeVerificationScreen' component={CodeVerificationScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppProvider>
      </SafeAreaProvider>
  );
}
