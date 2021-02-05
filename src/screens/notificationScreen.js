import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fab from '../components/atoms/fab'
import NotificationList from '../components/organisms/notificationList'

const NotificationScreen = () => {
  const values = []

  return (
    <View style={styles.root}>
      <NotificationList
        data={values.map((value) => (value))}
      />
      <View style={styles.fabWrapper}>
        <Fab onPress={() => console.log("press")}>
          <MaterialIcons name="edit" size={24} color="#ffffff" />
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

export default NotificationScreen