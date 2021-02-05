import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

const getFabSizeHandle = (size) => {
  switch (size) {
    case 'xxs':
      return 24
    case 'xs':
      return 30
    case 's':
      return 40
    case 'm':
      return 50
    case 'l':
      return 80
    case 'xl':
      return 100
    case 'xxl':
      return 120
  }
}

const Fab = ({ size = 'm', color = '#1da1f2', style, children, ...rest }) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: getFabSizeHandle(size),
          height: getFabSizeHandle(size),
          borderRadius: getFabSizeHandle(size) / 2,
          backgroundColor: color,
        },
        styles.root,
        style,
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Fab