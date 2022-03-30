import { createNativeStackNavigator } from '@react-navigation/navigate-stack';

import Welcome from '../pages/Welcome';
import SingIn from '../pages/Singin';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

