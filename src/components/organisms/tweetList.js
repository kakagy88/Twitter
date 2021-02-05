import React from 'react'
import { View, FlatList, StyleSheet, Text, Animated } from 'react-native'
import Separator from '../../components/atoms/separator'
import TweetCard from './tweetCard'

const TweetListItem = ({ user, tweet, onPressCard }) => {
  return (
    <TweetCard
      user={user}
      tweet={tweet}
      onPressCard={() => onPressCard(user, tweet)}
    />
  )
}

const ListEmptyComponent = () => {
  return (
    <View style={styles.emptyWrapper}>
      <Text style={styles.emptyText}>ツイートが見つかりません</Text>
    </View>
  )
}

const TweetList = ({
  data,
  onPressCard,
  onScroll,
  contentContainerStyle,
  scrollIndicatorInsets,
}) => {
  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.tweet.id}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <TweetListItem
          user={item.user}
          tweet={item.tweet}
          onPressCard={onPressCard}
        />
      )}
      ListEmptyComponent={<ListEmptyComponent />}
      onScroll={onScroll}
      contentContainerStyle={contentContainerStyle}
      scrollIndicatorInsets={scrollIndicatorInsets}
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

export default TweetList