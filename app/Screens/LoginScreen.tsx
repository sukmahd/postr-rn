import { useNavigation } from "@react-navigation/core"
import { useState } from "react"
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator'
import { addUser, setUser } from "../Store/userSlice"

const LoginScreen: React.FC = () => {
    const navigation = useNavigation()
    const [username, onChangeText] = useState<string>('')
    const customConfig: Config = {
        dictionaries: [adjectives, colors, animals],
        separator: '-',
        length: 2,
      };
    
    const dispatch = useDispatch()
      
    const onPressGenerate = () => {
          const randomName: string = uniqueNamesGenerator(customConfig);
          let newUser = {
              user: randomName
          }
          dispatch(addUser(newUser))
          dispatch(setUser(newUser))
          navigation.navigate('Feeds')
    }

    const onPressLogin = () => {
        //check if exist go to feed
        //if not exist create new and go to feed
        if(username != '') {
            dispatch(setUser({user: username}))
            navigation.navigate('Feeds')
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text onPress={onPressGenerate} style={{color: 'white'}}>
                    Generate New User
                </Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>
                or
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value={username}
                placeholder="Enter your username"
            />
            <TouchableOpacity onPress={onPressLogin} style={styles.button}>
                <Text style={{color: 'white'}}>
                    Login with username
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'black'
    },
    button: {
        backgroundColor: '#007AFF',
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
        alignItems: 'center'
    }
  });

export default LoginScreen