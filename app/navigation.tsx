import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentScreen from './Screens/CommentScreen';
import FeedScreen from './Screens/FeedScreen';
import PostScreen from './Screens/PostScreen';


const Stack = createNativeStackNavigator()

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Feeds"
                    component={FeedScreen}
                />
                <Stack.Screen 
                    name="Comments"
                    component={CommentScreen}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{presentation: 'modal'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation