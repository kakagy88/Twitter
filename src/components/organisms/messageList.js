import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import Separator from '../../components/atoms/separator'
// import MessageCard from './messageCard'

const MessageListItem = ({ messageID }) => {
  return (
    // <MessageCard
    //   messageID={messageID}
    // />
    <Text>messageID: {messageID}</Text>
  )
}

const ListEmptyComponent = () => {
  return (
    <View style={styles.emptyWrapper}>
      <Text style={styles.emptyText}>メッセージがありません</Text>
    </View>
  )
}

const MessageList = ({
  data
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.messageID}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <MessageListItem
          messageID={item.messageID}
        />
      )}
      ListEmptyComponent={<ListEmptyComponent />}
    />
  )
}

const styles = StyleSheet.create({
  emptyWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyText: {
    color: 'gray',
    fontSize: 16,
  },
})

export default MessageList