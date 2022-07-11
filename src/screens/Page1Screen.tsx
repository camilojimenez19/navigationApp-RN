import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Page1Screen = ( { navigation }: Props) => {

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                onPress={ () => navigation.toggleDrawer() }
            >
                <Icon
                    name="menu-outline"
                    size={40}
                    color={ colores.primary }
                />
            </TouchableOpacity>
        ),
      });
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 1 Screen</Text>
            <Button
                title="Go to page 2"
                onPress={ () => navigation.navigate('Page2Screen') }
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 20,
                }}
            >
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={ () => navigation.navigate('PeopleScreen', {
                        id: 1,
                        name: 'Pedro',
                    }) }
                >
                    <Text><Icon name="person-outline" size={40} color="#fff" /></Text>
                    <Text style={ styles.bigButtonText }>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={ () => navigation.navigate('PeopleScreen', {
                        id: 2,
                        name: 'Maria',
                    }) }
                >
                    <Text><Icon name="person-outline" size={40} color="#fff" /></Text>
                    <Text style={ styles.bigButtonText }>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
