import React from 'react'
import { TouchableOpacity, Animated, StyleSheet, View } from 'react-native'

const ScaleButton = ({ children, ...rest }) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity activeOpacity={1} onPressIn={onPressIn} onPressOut={onPressOut} {...rest}>
      <Animated.View style={{transform: [{scale}]}}>
        {children}
      </Animated.View>
    </TouchableOpacity>
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
    position: 'absolute'
  },
})

export default ScaleButton