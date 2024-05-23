import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login}
            options={{
                headerShown: false
            }} />
          
        </Stack.Navigator>
    );
}