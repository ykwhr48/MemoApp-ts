import React from 'react';
import { View, StyleSheet } from 'react-native';
import { shape, string } from 'prop-types';

import Icon from './Icon';

export default function CircleButton({ style, name }) {
  return (
    <View style={[styles.circleButton, style]}>
      <Icon name={name} size={40} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // for iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8, // for Android
  },
});
