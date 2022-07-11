import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactScreen = () => {

    const { authState: { isLoggedIn }, signIn } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> ContactScreen </Text>

            {
                !isLoggedIn
                    ? <Button title="SignIn" onPress={signIn} />
                    : <Text>You already logged in</Text>
            }
        </View>
    );
}
