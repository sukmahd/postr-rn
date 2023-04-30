import {
    FlatList, Pressable, ActivityIndicator, View
} from 'react-native'
import { FeedItem } from '../Types/type';
import FeedListItem from '../Components/FeedListItem'
import { useNavigation } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { getFeeds } from '../Services'

const FeedScreen: React.FC = () => {
    const navigation = useNavigation()
    const [feeds, setFeeds] = useState([])
    const [isLoading, setLoading] = useState<boolean>()
    const [page, setPage] = useState<number>(1)
    const limit = 10


    useEffect(() => {
        fetchFeeds()
    },[])

    const fetchFeeds = () => {
        setLoading(true)
        let params = '?page=' + page + '&limit=' + limit
        getFeeds(params).then(response => {
            setPage(page+1)
            setLoading(false)
            setFeeds([...feeds, ...response.data])
        }).catch(error => {
            setLoading(false)
            console.log('error', error);
        })
    }

    const fetchMoreData = () => {
        if(!isLoading) {
            fetchFeeds()
        }
    }

    return (
        <FlatList
            data={feeds}
            renderItem={({item}) => (
                <Pressable onPress={() => {
                    navigation.navigate('Comments', {
                        feed: item
                    })
                }}>
                    <FeedListItem data={item} />
                </Pressable>
            )}
            ListFooterComponent={() => (
                isLoading ? <ActivityIndicator/> : <View></View>
            )}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
      />
    )
}

export default FeedScreen