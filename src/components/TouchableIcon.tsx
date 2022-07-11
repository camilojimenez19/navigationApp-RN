
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

interface Props {
    iconName: string,

}
export const TouchableIcon = ({ iconName }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => console.log( iconName ) }
        >
            <Icon
                name={ iconName }
                size={80}
                color={colores.primary}
        />
        </TouchableOpacity>
    );
}
{/* <Icon name="airplane-outline" size={80} color={ colores.primary } />
          <Icon name="alarm-outline" size={80} color={ colores.primary } />
          <Icon name="at-circle-outline" size={80} color={ colores.primary } />
          <Icon name="albums-outline" size={80} color={ colores.primary } />
          <Icon name="arrow-down-outline" size={80} color={ colores.primary } />
        <Icon name="bar-chart-outline" size={80} color={ colores.primary } /> */}

