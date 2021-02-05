import React from 'react'
import { View } from 'react-native'

const getCircleSkeletonSizeHandle = (size) => {
  switch (size) {
    case 'xxs':
      return 12
    case 'xs':
      return 24
    case 's':
      return 30
    case 'm':
      return 40
    case 'l':
      return 80
    case 'xl':
      return 100
    case 'xxl':
      return 120
  }
}

const CircleSkeleton = ({ size = 'm', skeletonColor = '#DBE5ED', style, ...rest }) => {
  return (
    <View
      style={[
        {
          width: getCircleSkeletonSizeHandle(size),
          height: getCircleSkeletonSizeHandle(size),
          borderRadius: getCircleSkeletonSizeHandle(size) / 2,
          backgroundColor: skeletonColor,
        },
        style,
      ]}
      {...rest}
    />
  )
}

export default CircleSkeleton