import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Profile } from '../screens/Profile';
import { SignIn } from '../screens/SignIn';


const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen
          name="SignIn"
          component={SignIn}
        />
        <Screen
          name="Profile"
          component={Profile}
        />
      </Navigator>
    </NavigationContainer>
  )
}