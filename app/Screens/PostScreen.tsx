import React from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native"


const PostScreen: React.FC = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <View>
            <View style={styles.header}>
                <Pressable style={styles.cancelWrapper}>
                    <Text style={styles.text}>
                        Cancel
                    </Text>
                </Pressable>
                <Pressable style={styles.postWrapper}>
                    <Text style={styles.text}>
                        Post
                    </Text>
                </Pressable>
            </View>
            <TextInput
                style={{
                    borderBottomWidth:1, 
                    borderBottomColor: 'black',
                    marginHorizontal: 10,
                    lineHeight: 16
                }}
                onChangeText={onChangeText}
                // onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
                maxLength={100}
                autoCapitalize={'none'}
                value={text}
                placeholder={"write post here"}
                placeholderTextColor={'#CCCFC9'}
                multiline
                numberOfLines={3}
                textAlignVertical={'top'}
          />
          <Text style={{marginHorizontal:10}}>{text.length}/100</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancelWrapper: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3B30',
        padding: 10,
        minWidth: 80
    },
    postWrapper: {
        minWidth: 80,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007AFF'
    },
    text: {
        color: '#EFEFF4',
        textAlign: 'center'
    }
})

export default PostScreen