import {View, ActivityIndicator, ActivityIndicatorProps} from 'react-native';

import {styles} from './styles';


export function Loading({...rest}:ActivityIndicatorProps){

  return (
    <View style={styles.container}>
      <ActivityIndicator {...rest}/>
    </View>
  )
}