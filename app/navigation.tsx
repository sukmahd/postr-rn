import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentScreen from './Screens/CommentScreen';
import FeedScreen from './Screens/FeedScreen';
import PostScreen from './Screens/PostScreen';
import LoginScreen from './Screens/LoginScreen';
import OptionScreen from './Screens/OptionScreen';


const Stack = createNativeStackNavigator()

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                 <Stack.Screen
                    name="Option"
                    component={OptionScreen}
                    options={({navigation}) => ({ 
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Login')} style={{flexDirection:'row'}}>
                              <Text>Logout</Text>
                            </Pressable>
                        )
                    })}
                />
                <Stack.Screen
                    name="Feeds"
                    component={FeedScreen}
                    options={({navigation}) => ({ 
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Post')} style={{flexDirection:'row'}}>
                              <Text>New Post</Text>
                            </Pressable>
                        ),
                        headerLeft: () => (
                            <Pressable onPress={() => navigation.navigate('Option')} style={{flexDirection:'row'}}>
                                <Text>Option</Text>
                            </Pressable>
                        )
                    })}
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