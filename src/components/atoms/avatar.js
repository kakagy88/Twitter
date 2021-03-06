import React from 'react'
import { Image, View } from 'react-native'

const noThumbnailURL = 'https://www.drnitinborse.com/wp-content/uploads/2018/02/user-icon.png'

const getAvatarSizeHandle = (size) => {
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

const Avatar = ({ size = 'm', uri, style, ...rest }) => {
  return (
    <View
      style={[
        {
          width: getAvatarSizeHandle(size),
          height: getAvatarSizeHandle(size),
          borderRadius: getAvatarSizeHandle(size) / 2,
        },
        style,
      ]}
      {...rest}
    >
      <Image
        style={{
          width: getAvatarSizeHandle(size),
          height: getAvatarSizeHandle(size),
          borderRadius: getAvatarSizeHandle(size) / 2,
        }}
        source={{ uri: uri ?? noThumbnailURL }}
      />
    </View>
  )
}

export default Avatar