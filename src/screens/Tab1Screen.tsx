import React from 'react'

import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10,
    }}>
        <Text style={ styles.title }> Iconos </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="alarm-outline"/>
          <TouchableIcon iconName="at-circle-outline"/>
          <TouchableIcon iconName="albums-outline"/>
          <TouchableIcon iconName="arrow-down-outline"/>
          <TouchableIcon iconName="bar-chart-outline"/>
        </View>
    </View>
  )
}






