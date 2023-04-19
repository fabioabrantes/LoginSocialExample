import {View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import {Loading} from './src/components/Loading';

import {theme} from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}>
      <StatusBar style="light" backgroundColor="transparent" translucent/>

      {
        !fontsLoaded ? 
          <Loading size='large' color={theme.colors.primary}/>
        :
          <Routes/>
      }
    </View>
  );
}

