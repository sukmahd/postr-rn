import {
    FlatList, Text, View, StyleSheet
} from 'react-native'
import { CommentItem } from '../Types/type';

type CommentItemProps = {
    data: CommentItem
}

const CommentListItem: React.FC<CommentItemProps> = ({ 
    data
}) => {
    const date = new Date(data.createdAt)
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.date}>{date.toDateString()}</Text>
            <Text style={styles.content}>{data.comment}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'column',
      padding: 10,
      backgroundColor: 'white',
      marginTop: 5,
      marginHorizontal: 7
    },
    name: {
      fontWeight: '500',
      fontSize: 14,
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

  export default CommentListItem