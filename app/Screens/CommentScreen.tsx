import {
    FlatList, Text, View, StyleSheet, TextInput, Pressable, Image, ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react';
import { CommentItem, FeedItem } from '../Types/type';
import FeedListItem from '../Components/FeedListItem'
import CommentListItem from '../Components/CommentListItem'
import { icons } from '@Assets'
import { getComment } from '../Services'
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { selectCommentLoading, selectComments } from '../Store/commentSlice';
import { fetchComment } from '../Store/thunk/fetchComment';

const listComment: CommentItem[] = [
    {
        name: 'jonny',
        comment: 'ada apa ini?',
        createdAt: '12 november 2021',
        id: '3'
    },
    {
        name: 'sally',
        comment: 'Kamu siapa?',
        createdAt: '12 november 2021',
        id: '1'
    },
    {
        name: 'ray',
        comment: 'ada dimana',
        createdAt: '12 november 2021',
        id: '2'
    },
    {
        name: 'mala',
        comment: 'ada dimana',
        createdAt: '12 november 2021',
        id: '4'
    }
]

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
        <FooterComponent/>
        </>
    )
}

const FooterComponent: React.FC = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <View style={styles.footerContainer}>
            <TextInput
                style={styles.commentInput}
                value={text}
                onChangeText={onChangeText}
            />
            <Pressable>
                <Image style={styles.sendIcon} source={icons.icComment}  />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    commentInput: {
        height: 40,
        flex: 1,
        borderWidth: 1,
        padding: 10,
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