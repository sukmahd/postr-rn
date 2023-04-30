import React from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native"
import { useTranslation } from 'react-i18next';
import { postFeed } from '../Services';
import { useNavigation } from '@react-navigation/core';
import { useAppDispatch } from '../Store/hooks';
import feedSlice, { addFeedItem } from '../Store/feedSlice';
import { useDispatch } from 'react-redux';


const PostScreen: React.FC = () => {
    const navigation = useNavigation()
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const [text, onChangeText] = React.useState('');

    const postOnPress = () => {
        let body = {
            content: text,
            longitude: 0,
            latitude: 0,
            username: 'testing 1',
            comments: 0,
            createAt: new Date()
        }
        postFeed(body).then(response => {
            dispatch(addFeedItem({
                feed: response.data
            }))
            navigation.goBack()
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <View>
            <View style={styles.header}>
                <Pressable onPress={() => {
                    navigation.goBack()
                }} style={styles.cancelWrapper}>
                    <Text style={styles.text}>
                        {t('common:cancel')}
                    </Text>
                </Pressable>
                <Pressable onPress={postOnPress} style={styles.postWrapper}>
                    <Text style={styles.text}>
                        {t('common:post')}
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
                placeholder={t('common:post_placeholder')}
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