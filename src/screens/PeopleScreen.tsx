import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PeopleScreen'> { }

export const PeopleScreen = ({ route, navigation }: Props) => {

    const params = route.params
    const { name } = params;

    const { authState: { isLoggedIn }, changeUsername } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({ title: name })
    }, []);

    useEffect(() => {
        isLoggedIn && changeUsername(name);
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
        </View>
    );
}
