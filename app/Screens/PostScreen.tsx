import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native"
import { useTranslation } from 'react-i18next';
import { postFeed } from '../Services';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from '../Store/hooks';
import { addFeedItem } from '../Store/feedSlice';
import { useDispatch } from 'react-redux';
import { selectCurrentUser, selectUserLocation } from '../Store/userSlice';
import GetLocation from 'react-native-get-location'
import { setLocation } from "../Store/userSlice"

const PostScreen: React.FC = () => {
    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(false)
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const [text, onChangeText] = React.useState('');
    const user = useAppSelector(selectCurrentUser)
    const location = useAppSelector(selectUserLocation)

    useEffect(() => {
        getLocation()
    },[])
    
    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: false,
            timeout: 10000,
        })
        .then(locResult => {
            dispatch(setLocation({
                location: { 
                    latitude: locResult.latitude, 
                    longitude: locResult.longitude
                }
            }))
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }

    const postOnPress = () => {
        console.log('lokasi', location);
        
        if (text != "" && !isLoading) {
            setLoading(true)
            let body = {
                content: text,
                longitude: location.longitude,
                latitude: location.latitude,
                username: user,
                comments: 0,
                createAt: new Date()
            }
            postFeed(body).then(response => {
                dispatch(addFeedItem({
                    feed: response.data
                }))
                setLoading(false)
                navigation.goBack()
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
            })
        }
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
                    lineHeight: 16,
                    color: 'black'
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
          <Text style={{marginHorizontal:10, color: 'black'}}>{text.length}/100</Text>
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