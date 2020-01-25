import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
 
export default class CollapsibleBathroomsList extends Component {
    render() {
        return (
          <View style={styles.container}>
            <CollapsibleList
              numberOfVisibleItems={1}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{buttonText}</Text>
                </View>
              }>
              <View style={styles.collapsibleItem}>
                <Text>Hello Collapsable List :)</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Collapsable List Item</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Another Collapsable List Item</Text>
              </View>
            </CollapsibleList>
          </View>
        );
      }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: "center",
    alignItems: "center",
    */
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10
  }
});