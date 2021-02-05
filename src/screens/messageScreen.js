import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fab from '../components/atoms/fab'
import MessageList from '../components/organisms/messageList'

const MessageScreen = () => {
  const values = []

  return (
    <View style={styles.root}>
      <MessageList
        data={values.map((value) => (value))}
      />
      <View style={styles.fabWrapper}>
        <Fab onPress={() => console.log("press")}>
          <MaterialCommunityIcons name="email-plus-outline" size={24} color="#ffffff" />
        </Fab>
      </View>
    </View>
  )
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

export default MessageScreen