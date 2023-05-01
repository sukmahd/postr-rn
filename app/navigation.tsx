import { Pressable, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentScreen from './Screens/CommentScreen';
import FeedScreen from './Screens/FeedScreen';
import PostScreen from './Screens/PostScreen';
import LoginScreen from './Screens/LoginScreen';
import OptionScreen from './Screens/OptionScreen';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { resetUser } from './Store/userSlice';


const Stack = createNativeStackNavigator()

const Navigation: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const logout = (navigation: any) => {
        dispatch(resetUser({}))
        navigation.navigate('Login')
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                 <Stack.Screen
                    name="Option"
                    component={OptionScreen}
                    options={({navigation}) => ({ 
                        headerRight: () => (
                            <Pressable onPress={() => logout(navigation)} style={{flexDirection:'row'}}>
                              <Text style={{color: 'black'}}>{t('common:logout')}</Text>
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
                              <Text style={{color: 'black'}}>{t('common:new_post')}</Text>
                            </Pressable>
                        ),
                        headerLeft: () => (
                            <Pressable onPress={() => navigation.navigate('Option')} style={{flexDirection:'row'}}>
                                <Text style={{color: 'black'}}>{t('common:option')}</Text>
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