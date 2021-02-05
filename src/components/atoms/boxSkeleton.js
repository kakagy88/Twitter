import React from 'react'
import { View } from 'react-native'

const BoxSkeleton = ({ width = 300, height = 60, skeletonColor = '#DBE5ED', style, ...rest }) => {
  return (
    <View
      style={[
        {
          width,
          height,
          borderRadius: 6,
          backgroundColor: skeletonColor,
        },
        style,
      ]}
      {...rest}
    />
  )
}

export default BoxSkeleton