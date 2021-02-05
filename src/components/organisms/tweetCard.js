import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Avatar from '../../components/atoms/avatar'
import CircleSkeleton from '../atoms/circleSkeleton'
import BoxSkeleton from '../atoms/boxSkeleton'
import Spacer from '../../components/atoms/spacer'
import ImageGallery from '../../components/molecules/imageGallery'
// import TweetPreview from './tweetPreview'


const HeartIcon = ({ isLiked, likeCount }) => {
  return (
    <React.Fragment>
      {isLiked
        ? <MaterialCommunityIcons name="heart" size={20} color="rgb(224, 36, 94)" />
        : <MaterialCommunityIcons name="heart-outline" size={20} color="gray" />
      }

      <Spacer layout="vertical" size="xxs" />
      {likeCount > 0 && <Text style={isLiked ? styles.likedCountText : styles.countText}>{likeCount}</Text>}
    </React.Fragment>
  )
}

const TweetCard = ({
  user,
  tweet,
  onPressCard,
  onPressPreview,
  onPressAvatar,
  onPressRetweet,
  onPressDetail,
  onPressShare
}) => {
  const onPressLike = useCallback(() => { console.log("press") },[] )

  const likeTweetLoading = false;

  return (
    <TouchableOpacity style={styles.root} onPress={onPressCard}>
      <View style={styles.inner}>
        <View style={styles.avatarWrapper}>
          <TouchableOpacity onPress={onPressAvatar}>
            <Avatar size="m" uri={(user && user.thumbnailURL) ?? undefined} />
          </TouchableOpacity>
        </View>
        <Spacer layout="vertical" size="s" />
        <View style={styles.contentWrapper}>
          <View style={styles.contentHeaderWrapper}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.userText}>
              <Text style={styles.nameText}>{user.name} </Text>
              <Text style={styles.idText}>@{user.writerUID}{tweet.createdAt}</Text>
            </Text>
            <Spacer layout="vertical" size="s" />
            {/* <Text style={styles.dateText}>{fromNow(tweet.createdAt)}</Text> */}
            <TouchableOpacity onPress={onPressDetail}>
              <MaterialCommunityIcons name="dots-horizontal" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <Spacer size="xs" />
          <View>
            <Text style={styles.tweetText}>{tweet.text}</Text>
          </View>
          {tweet.fileURLs.length > 0 && (
            <React.Fragment>
              <Spacer size="s" />
              <ImageGallery fileURLs={tweet.fileURLs} />
            </React.Fragment>
          )}
          {tweet.origin && (
            <React.Fragment>
              <Spacer size="s" />
              {/* <TweetPreview
                tweet={tweet}
                user={user}
                onPress={onPressPreview}
              /> */}
              <Spacer size="s" />
            </React.Fragment>
          )}
          <View style={styles.actionsWrapper}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="chat-outline" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRetweet}>
              <MaterialCommunityIcons name="twitter-retweet" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper} onPress={onPressLike}>
              {!likeTweetLoading && (
                <HeartIcon isLiked={tweet.isLiked} likeCount={tweet.likeCount} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressShare}>
              <MaterialCommunityIcons name="export-variant" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#ffffff',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  avatarWrapper: {},
  contentWrapper: {
    flex: 1,
  },
  contentHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  actionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingTop: 12,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userText: {
    flex: 1, // for ellipsizeMode
  },
  idText: {
    fontSize: 14,
    color: 'gray',
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  tweetText: {
    fontSize: 16,
  },
  countText: {
    fontSize: 12,
    color: 'gray',
  },
  likedCountText: {
    fontSize: 12,
    color: 'rgb(224, 36, 94)',
  },
})

export default TweetCard