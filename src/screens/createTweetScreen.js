import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Screen = () => {
  return (
    <View style={styles.rootContainer}>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'lightgray',
  },
});

export default Screen;
