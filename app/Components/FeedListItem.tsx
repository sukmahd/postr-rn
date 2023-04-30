import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { icons } from '@Assets'
import { FeedItem } from '../Types/type';
type FeedItemProps = {
    data: FeedItem
}

const FeedListItem: React.FC<FeedItemProps> = ({
    data
}) => {
    const date = new Date(data.createdAt)
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.name}>{data.username}</Text>
        <Text style={styles.date}>{date.toDateString()}</Text>
        <Text style={styles.content}>{data.content}</Text>
        <View style={styles.commentContainer}>
          <Image style={styles.commentIcon} source={icons.icComment} />
          <Text>{data.comments}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'column',
      padding: 10,
      backgroundColor: 'white',
      marginBottom: 2
    },
    name: {
      fontWeight: '500',
      fontSize: 16,
      color: 'black'
    },
    date: {
      fontSize: 14,
      color: 'gray',
      marginTop: 6
    },
    content: {
      fontSize: 15,
      fontWeight: '400',
      marginVertical: 6,
      color: 'black'
    },
    commentIcon: {
      width: 20,
      height: 20,
      marginRight: 8
    },
    commentContainer: {
      flexDirection:'row'
    }
  });

export default FeedListItem