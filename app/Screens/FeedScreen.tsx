import {
    StyleSheet,
    Image,
    View,
    FlatList,
    Pressable
} from 'react-native'
import { FeedItem } from '../Types/type';
import FeedListItem from '../Components/FeedListItem'

const listData: FeedItem[] = [
    {
      username: "Andi Lau",
      comments: 10,
      content: "Ayo kita berkelana keliling dunia dengan menggunakan awan kinton mencari dragon ball",
      date: '17 desember 2022',
      id: "1"
    },
    {
      username: "Andi Lee",
      comments: 10,
      content: "Ayo kita berkelana keliling dunia dengan menggunakan awan kinton mencari dragon ball",
      date: '17 desember 2022',
      id: "2"
    },
    {
      username: "Andi Luu",
      comments: 10,
      content: "Ayo kita berkelana keliling dunia dengan menggunakan awan kinton mencari dragon ball",
      date: '17 desember 2022',
      id: "3"
    }
  ]

const FeedScreen: React.FC = () => {
    return (
        <FlatList
        data={listData}
        renderItem={({item}) => (
          <FeedListItem data={item} />
        )}
      />
    )
}

export default FeedScreen