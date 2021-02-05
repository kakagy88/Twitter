import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Animated, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fab from '../components/atoms/fab'
import TweetList from '../components/organisms/tweetList'
import { useNavigation, StackActions } from '@react-navigation/native'

import { StackNavigationProp } from '@react-navigation/stack';
import { useCollapsibleHeader } from 'react-navigation-collapsible';


const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation()

  const goToCreateTweet = useCallback(() => {
    console.log("goToCreateTweet")
    navigation.dispatch(StackActions.push('CreateTweet'))
  }, [navigation])

  const goToTweet = useCallback((user, tweet) => {
      console.log("goToTweet")
      navigation.dispatch(StackActions.push('Tweet', { user, tweet }))
    },
    [navigation]
  )


  // data
  const user1 = { name:"UserName1", writerUID:"UserUID1", thumbnailURL: "https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png" }
  const tweet1 = { id:"1", createdAt: "・1日", text: "twit something", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png"], origin: true, isLiked: true, likeCount: 1}
  
  const user2 = { name:"UserName2", writerUID:"UserUID2" }
  const tweet2 = { id:"2", createdAt: "・2日", text: "pikachu", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png","https://dime.jp/genre/files/2020/02/b83875e375367fe610b402345787ca71-770x366.png"], origin: true, likeCount: 100}

  const user3 = { name:"UserName3", writerUID:"UserUID3" }
  const tweet3 = { id:"3", createdAt: "・3日", text: "bla...bla...bla...", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png","https://dime.jp/genre/files/2020/02/b83875e375367fe610b402345787ca71-770x366.png", "https://www.fashion-press.net/img/news/57746/F-w.jpg"], origin: true, isLiked: true, likeCount: 1000}

  const user4 = { name:"UserName4", writerUID:"UserUID4", thumbnailURL: "https://dime.jp/genre/files/2020/02/b83875e375367fe610b402345787ca71-770x366.png" }
  const tweet4 = { id:"4", createdAt: "・2日", text: "To Do", fileURLs: [], origin: true, likeCount: 0}

  const user5 = { name:"UserName5", writerUID:"UserUID5" }
  const tweet5 = { id:"5", createdAt: "・1日", text: "twit..twit..", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png","https://dime.jp/genre/files/2020/02/b83875e375367fe610b402345787ca71-770x366.png","https://dime.jp/genre/files/2020/02/b83875e375367fe610b402345787ca71-770x366.png","https://dime.jp/genre/files/2020/02/b83875e375367fe610b402345787ca71-770x366.png"], origin: true,  isLiked: true, likeCount: 2}

  const user6 = { name:"UserName6", writerUID:"UserUID6" }
  const tweet6 = { id:"6", createdAt: "・1日", text: "twit..twit..", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png"], origin: true,  isLiked: true, likeCount: 2}

  const user7 = { name:"UserName7", writerUID:"UserUID7" }
  const tweet7 = { id:"7", createdAt: "・1日", text: "twit..twit..", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png"], origin: true,  isLiked: true, likeCount: 2}

  const user8 = { name:"UserName8", writerUID:"UserUID8" }
  const tweet8 = { id:"8", createdAt: "・1日", text: "twit..twit..", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png"], origin: true,  isLiked: true, likeCount: 2}

  const user9 = { name:"UserName9", writerUID:"UserUID9" }
  const tweet9 = { id:"9", createdAt: "・1日", text: "twit..twit..", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png"], origin: true,  isLiked: true, likeCount: 2}

  const user10 = { name:"UserName10", writerUID:"UserUID10" }
  const tweet10 = { id:"10", createdAt: "・1日", text: "twit..twit..", fileURLs: ["https://i.pinimg.com/originals/ff/b2/d4/ffb2d47c3b9737c748c2311f56de4a55.png"], origin: true,  isLiked: true, likeCount: 2}
  
  const values = [
    {user: user1, tweet: tweet1}, 
    {user: user2, tweet: tweet2},
    {user: user3, tweet: tweet3},
    {user: user4, tweet: tweet4},
    {user: user5, tweet: tweet5},
    {user: user6, tweet: tweet6}, 
    {user: user7, tweet: tweet7},
    {user: user8, tweet: tweet8},
    {user: user9, tweet: tweet9},
    {user: user10, tweet: tweet10}
  ]

    const {
      onScroll,
      containerPaddingTop,
      scrollIndicatorInsetTop,
    } = useCollapsibleHeader({
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'white',
        },
      },
    });
  
    return (
      <View style={styles.root}>
        <TweetList
          data={values.map((value) => (value))}
          onPressCard={goToTweet}
          onScroll={onScroll}
          contentContainerStyle={{
            paddingTop: containerPaddingTop,
          }}
          scrollIndicatorInsets={{
            top: scrollIndicatorInsetTop,
          }}
        />

        <View style={styles.fabWrapper}>
          <Fab onPress={goToCreateTweet}>
            <MaterialIcons name="edit" size={24} color="#ffffff" />
          </Fab>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(230, 236, 240)',
  },
  headerLeftWrapper: {
    paddingLeft: 24,
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
})

export default HomeScreen