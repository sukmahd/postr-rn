import {
    FlatList, Text, View, StyleSheet, TextInput, Pressable, Image
} from 'react-native'
import React from 'react';
import { CommentItem, FeedItem } from '../Types/type';
import FeedListItem from '../Components/FeedListItem'
import CommentListItem from '../Components/CommentListItem'
import { icons } from '@Assets'

const dummyFeed: FeedItem = {
    username: "Andi Lau",
    comments: 10,
    content: "Ayo kita berkelana keliling dunia dengan menggunakan awan kinton mencari dragon ball",
    date: '17 desember 2022',
    id: "1"
  }
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

const CommentScreen: React.FC = () => {
    return (
        <>
        <FlatList
            data={listComment}
            renderItem={({item}) => (
                <CommentListItem data={item} />
            )}
            ListHeaderComponent={HeaderComponent}
        />
        <FooterComponent/>
        </>
    )
}

const HeaderComponent: React.FC = () => {
    return (
        <FeedListItem data={dummyFeed} />
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