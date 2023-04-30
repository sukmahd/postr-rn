import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { icons } from '@Assets'
import { FeedItem } from '../Types/type';

type FeedItemProps = {
    data: FeedItem
}

const FeedListItem: React.FC<FeedItemProps> = ({
    data
}) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.name}>{data.username}</Text>
        <Text style={styles.date}>{data.createdAt}</Text>
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
    },
    date: {
      fontSize: 14,
      color: 'gray',
      marginTop: 6
    },
    content: {
      fontSize: 15,
      fontWeight: '400',
      marginVertical: 6
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