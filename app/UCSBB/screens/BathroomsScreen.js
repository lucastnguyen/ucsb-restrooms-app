import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CollapsibleBathroomsList } from '../components/CollapsibleBathroomsList';

import { MonoText } from '../components/StyledText';

export default function BathroomsScreen() {
  return (
    <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Phelps 2501</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Phelps 3501</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>South Hall 1636</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>North Hall 0000</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Harold Frank Hall 0000</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Broida Hall 0000</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Girvetz Hall 0000</MonoText>
        </View>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Life Sciences Building 0000</MonoText>
        </View>
      </View>

    
      <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <CollapsibleBathroomsList>CBL</CollapsibleBathroomsList>
      </View>
    </ScrollView>
    </View>
  );
}

BathroomsScreen.navigationOptions = {
  title: 'Bathrooms',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
});
