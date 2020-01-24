import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function BathroomsScreen() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

BathroomsScreen.navigationOptions = {
  title: 'Bathrooms',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
