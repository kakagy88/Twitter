import React, { useCallback } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useRoute, useNavigation, StackActions } from '@react-navigation/native'
import Separator from '../components/atoms/separator'
import TweetCard from '../components/organisms/tweetCard'

const TweetScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const user = route.params.user
  const tweet = route.params.tweet

  const goToUser = useCallback((user) => {
    console.log("goToUser")
      // navigation.dispatch(StackActions.push('User', { user }))
    },
    [navigation]
  )

  const goToReTweet = useCallback(() => {
      console.log("goToReTweet")
      // navigation.dispatch(StackActions.push('ReTweet', { tweet, user }))
    },
    [navigation]
  )

  return (
    <View style={styles.root}>
      <ScrollView>
        <TweetCard
          tweet={tweet}
          user={user}
          onPressAvatar={() => goToUser(user)}
          onPressRetweet={() => goToReTweet(user, tweet)}
        />
        <Separator />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(230, 236, 240)',
  },
})

export default TweetScreen