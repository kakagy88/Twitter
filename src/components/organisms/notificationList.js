import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import Separator from '../../components/atoms/separator'
// import NotificationCard from './notificationCard'

const NotificationListItem = ({ notificationID }) => {
  return (
    // <NotificationCard
    //   notificationID={notificationID}
    // />
    <Text>notificationID: {notificationID}</Text>
  )
}

const ListEmptyComponent = () => {
  return (
    <View style={styles.emptyWrapper}>
      <Text style={styles.emptyText}>お知らせがありません</Text>
    </View>
  )
}

const NotificationList = ({
  data
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.notificationID}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <NotificationListItem
          notificationID={item.notificationID}
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

export default NotificationList