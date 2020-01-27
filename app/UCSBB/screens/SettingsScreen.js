import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} initialRegion={{
      latitude: 119.8489,
      longitude: 34.4140,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
