import {
    FlatList, Pressable, ActivityIndicator, View
} from 'react-native'
import { FeedItem } from '../Types/type';
import FeedListItem from '../Components/FeedListItem'
import { useNavigation } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { getFeeds } from '../Services'
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { selectFeedLoading, selectFeeds } from '../Store/feedSlice';
import { fetchFeed } from '../Store/thunk/fetchFeed';

const FeedScreen: React.FC = () => {
    const navigation = useNavigation()

    const dispatch = useAppDispatch()
    const feeds = useAppSelector(selectFeeds)
    const isLoading = useAppSelector(selectFeedLoading)


    const [page, setPage] = useState<number>(1)
    const limit = 10

    useEffect(() => {        
        dispatch(fetchFeed({page: page, limit: limit}))
    },[page])



    const fetchMoreData = () => {
        if(!isLoading) {
            setPage(page + 1)
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