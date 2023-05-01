import {
    FlatList, Text, View, StyleSheet, TextInput, Pressable, Image, ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react';
import { CommentItem, FeedItem } from '../Types/type';
import FeedListItem from '../Components/FeedListItem'
import CommentListItem from '../Components/CommentListItem'
import { icons } from '@Assets'
import { getComment, postComment } from '../Services'
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { addCommentItem, selectCommentLoading, selectComments } from '../Store/commentSlice';
import { fetchComment } from '../Store/thunk/fetchComment';
import { useDispatch } from 'react-redux';
import { selectCurrentUser } from '../Store/userSlice';

const CommentScreen: React.FC = ({ route }) => {   
    const { feed } = route.params

    const dispatch = useAppDispatch()
    const comments = useAppSelector(selectComments)
    const isLoading = useAppSelector(selectCommentLoading)

    useEffect(() => {
        fetchMoreData()
    },[])

    const fetchMoreData = () => {
        dispatch(fetchComment({
            id: feed.id,
            page: 1,
            limit: 10
        }))
    }    

    return (
        <>
        <FlatList
            data={comments}
            renderItem={({item}) => (
                <CommentListItem data={item} />
            )}
            ListFooterComponent={() => (
                isLoading ? <ActivityIndicator/> : <View></View>
            )}
            ListHeaderComponent={() => (
                <FeedListItem data={feed} />
            )}
        />
        <FooterComponent
            newsId={feed.id}
        />
        </>
    )
}

interface FooterProp {
    newsId: string
}

const FooterComponent: React.FC<FooterProp> = (props) => {
    const [text, onChangeText] = React.useState('');
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const user = useAppSelector(selectCurrentUser)

    const onPressSend = () => {
        if (text != "" && !isLoading) {
            setLoading(true)
            let body = {
                name: user,
                comment: text,
                createAt: new Date()
            }
            postComment(props.newsId, body)
            .then(response => {           
                setLoading(false) 
                onChangeText('')
                dispatch(addCommentItem({
                    comment: response.data
                }))
            })
            .catch(error => {
                setLoading(false) 
                console.log('error', error);     
            })
        }
    }

    return (
        <View style={styles.footerContainer}>
            <TextInput
                style={styles.commentInput}
                value={text}
                onChangeText={onChangeText}
                maxLength={100}
            />
            {
                isLoading ? 
                <ActivityIndicator></ActivityIndicator>
                :
                <Pressable onPress={onPressSend}>
                    <Image style={styles.sendIcon} source={icons.icComment}  />
                </Pressable>
            }
           
        </View>
    )
}

const styles = StyleSheet.create({
    commentInput: {
        height: 40,
        flex: 1,
        borderWidth: 1,
        padding: 10,
        color: 'black'
      },
    sendIcon: {
        width:30, 
        height: 30, 
        marginHorizontal: 8
    },
    footerContainer: {
        padding: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default CommentScreen