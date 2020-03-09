import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import UCSBBMapView from '../components/UCSBBMapView.js';

import { MonoText } from '../components/StyledText';

import WelcomePopup from '../components/WelcomePopup';

export default function MapScreen() {
  return (
    <>
      <WelcomePopup pagekey={"uniqukey"} title={"Welcome"} description={"Head to settings in the bottom right to filter bathrooms shown on the map!"}/>
      <UCSBBMapView />
    </>
  );
}

MapScreen.navigationOptions = {
  header: null,
};

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
