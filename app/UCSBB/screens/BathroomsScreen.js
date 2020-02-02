import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import CollapsibleList from "react-native-collapsible-list";
import { MonoText } from '../components/StyledText';

export default function BathroomsScreen() {
  return (
    <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
          <CollapsibleList
              numberOfVisibleItems={0}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Phelps Hall</Text>
                </View>
              }>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Phelps 0000</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Phelps 0001</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Phelps 0002</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Phelps 0003</Text>
              </View>
              <View style={styles.collapsibleItemNeutral}>
                <Text style={styles.collapsibleItemText}>Phelps 2501</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Phelps 3501</Text>
              </View>
          </CollapsibleList>
          <CollapsibleList
              numberOfVisibleItems={0}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>South Hall</Text>
                </View>
              }>
              <View style={styles.collapsibleItemNeutral}>
                <Text style={styles.collapsibleItemText}>South Hall 1636</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>South Hall 0001</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>South Hall 0002</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>South Hall 0003</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>South Hall 0004</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>South Hall 0005</Text>
              </View>
          </CollapsibleList>
          <CollapsibleList
              numberOfVisibleItems={0}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Arts Building</Text>
                </View>
              }>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Arts Building 0000</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Arts Building 0001</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Arts Building 0002</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Arts Building 0003</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Arts Building 0004</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Arts Building 0005</Text>
              </View>
          </CollapsibleList>
          <CollapsibleList
              numberOfVisibleItems={0}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Harold Frank Hall</Text>
                </View>
              }>
              <View style={styles.collapsibleItemNeutral}>
                <Text style={styles.collapsibleItemText}>Harold Frank Hall 0000</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Harold Frank Hall 0001</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Harold Frank Hall 0002</Text>
              </View>
              <View style={styles.collapsibleItemFemale}>
                <Text style={styles.collapsibleItemText}>Harold Frank Hall 0003</Text>
              </View>
              <View style={styles.collapsibleItemMale}>
                <Text style={styles.collapsibleItemText}>Harold Frank Hall 0004</Text>
              </View>
              <View style={styles.collapsibleItemNeutral}>
                <Text style={styles.collapsibleItemText}>Harold Frank Hall 0005</Text>
              </View>
          </CollapsibleList>
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
  button: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: "rgba(230, 247, 233, 0.6)"
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
  },
  collapsibleItemText: {
    fontSize: 24,
    textAlign: 'center',
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
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5
  },
  collapsibleItemMale: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    backgroundColor: "rgba(170, 226, 240, 0.9)",
    padding: 20
  },
  collapsibleItemFemale: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    backgroundColor: "rgba(255, 186, 215, 0.6)",
    padding: 20
  },
  collapsibleItemNeutral: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    backgroundColor: "rgba(255, 242, 128, 0.6)",
    padding: 20
  }
});
