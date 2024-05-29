import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Ajusta la ruta
import DetailsScreen from './src/screens/DetailsScreen'; // Ajusta la ruta

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ingreso de Paciente' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalles del Paciente' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
