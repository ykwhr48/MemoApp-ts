import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton({ children }) {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
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
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 48,
  },
});
