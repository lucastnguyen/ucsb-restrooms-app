import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import CollapsibleList from "react-native-collapsible-list";
import ListElement from '../components/ListElement';
import { MonoText } from '../components/StyledText';
import {db} from '../firebase.js';

var rootRef = db.ref('/Buildings');
var buildingList;

// display data objects when database is modified
rootRef.on("child_changed", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// retrieve keys
rootRef.on("value", function(snapshot){
  var data = snapshot.val();
  buildingList = Object.keys(data);
});

export default function BathroomsScreen() {
  var lists = [];

  for(var i=0; i<buildingList.length; i++){
    var views = [];
    
    // retrieve children
    rootRef.child(buildingList[i]).on("value", function(snapshot){
      var data = snapshot.val();
      var roomList = Object.keys(data);

      for (var j=0; j<roomList.length; j++){
        room = roomList[j];
        var flag = data[room].Accessibility;
        var accessChair = ((flag=='True') ? 'wheelchair' : 'none');
    
        views.push(
          <View style={styles.collapsibleItemFemale}>
              <ListElement text={room} gender={data[room].Gender} access={accessChair} />
          </View>
        );
      }
    });

    lists.push(
        <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonContent={
              <View style={styles.button}>
                <Text style={styles.buttonText}>{buildingList[i]}</Text>
              </View>
            }>
            {views}
        </CollapsibleList>
    );
  }

  return (
      <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>   
        {lists}
        </View>
      </ScrollView>
      </View>
  );

//             <CollapsibleList
//               numberOfVisibleItems={0}
//               wrapperStyle={styles.wrapperCollapsibleList}
//               buttonContent={
//                 <View style={styles.button}>
//                   <Text style={styles.buttonText}>Phelps Hall</Text>
//                 </View>
//               }>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='Phelps 1166' gender='male' access='wheelchair' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Phelps 1168' gender='female' access='wheelchair' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='Phelps 1501' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Phelps 2501' gender='female' access='wheelchair' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='Phelps 2541' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='Phelps 3501' gender='male' access='wheelchair' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Phelps 3541' gender='female' access='none' />
//               </View>
//           </CollapsibleList>
//           <CollapsibleList
//               numberOfVisibleItems={0}
//               wrapperStyle={styles.wrapperCollapsibleList}
//               buttonContent={
//                 <View style={styles.button}>
//                   <Text style={styles.buttonText}>South Hall</Text>
//                 </View>
//               }>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='South Hall 1636' gender='male' access='wheelchair' />
//               </View>
//           </CollapsibleList>
//           <CollapsibleList
//               numberOfVisibleItems={0}
//               wrapperStyle={styles.wrapperCollapsibleList}
//               buttonContent={
//                 <View style={styles.button}>
//                   <Text style={styles.buttonText}>Buchanan Hall</Text>
//                 </View>
//               }>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Buchanan Hall 1914' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='Buchanan Hall 1944' gender='male' access='none' />
//               </View>
//           </CollapsibleList>
//           <CollapsibleList
//               numberOfVisibleItems={0}
//               wrapperStyle={styles.wrapperCollapsibleList}
//               buttonContent={
//                 <View style={styles.button}>
//                   <Text style={styles.buttonText}>Ellison Hall</Text>
//                 </View>
//               }>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Ellison Hall 1725' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//                 <ListElement text='Ellison Hall 1726' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Ellison Hall 2634' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//                 <ListElement text='Ellison Hall 2725' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//               <ListElement text='Ellison Hall 2726' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//               <ListElement text='Ellison Hall 3634' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//               <ListElement text='Ellison Hall 3725' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//               <ListElement text='Ellison Hall 3726' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//               <ListElement text='Ellison Hall 4725' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//               <ListElement text='Ellison Hall 4726' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//               <ListElement text='Ellison Hall 5725' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//               <ListElement text='Ellison Hall 5726' gender='male' access='none' />
//               </View>
//               <View style={styles.collapsibleItemFemale}>
//               <ListElement text='Ellison Hall 6725' gender='female' access='none' />
//               </View>
//               <View style={styles.collapsibleItemMale}>
//               <ListElement text='Ellison Hall 6726' gender='male' access='none' />
//               </View>

//           </CollapsibleList>

  // return (
  //   <View style={styles.container}>
  //   <ScrollView
  //     style={styles.container}
  //     contentContainerStyle={styles.contentContainer}>
  //     <View style={styles.container}>

  //         <CollapsibleList
  //             numberOfVisibleItems={0}
  //             wrapperStyle={styles.wrapperCollapsibleList}
  //             buttonContent={
  //               <View style={styles.button}>
  //                 <Text style={styles.buttonText}>{buildingList[Counter++]}</Text>
  //               </View>
  //             }>
  //             <View style={styles.collapsibleItemFemale}>
  //               <ListElement text={roomList[0]} gender='female' access='wheelchair' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //               <ListElement text={roomList[1]} gender='male' access='wheelchair' />
  //             </View>
  //         </CollapsibleList>

  //         <CollapsibleList
  //             numberOfVisibleItems={0}
  //             wrapperStyle={styles.wrapperCollapsibleList}
  //             buttonContent={
  //               <View style={styles.button}>
  //                 <Text style={styles.buttonText}>{buildingList[Counter]}</Text>
  //               </View>
  //             }>
  //             <View style={styles.collapsibleItemMale}>
  //               <ListElement text='South Hall 1636' gender='male' access='wheelchair' />
  //             </View>
  //         </CollapsibleList>
  //         <CollapsibleList
  //             numberOfVisibleItems={0}
  //             wrapperStyle={styles.wrapperCollapsibleList}
  //             buttonContent={
  //               <View style={styles.button}>
  //                 <Text style={styles.buttonText}>Buchanan Hall</Text>
  //               </View>
  //             }>
  //             <View style={styles.collapsibleItemFemale}>
  //               <ListElement text='Buchanan Hall 1914' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //               <ListElement text='Buchanan Hall 1944' gender='male' access='none' />
  //             </View>
  //         </CollapsibleList>
  //         <CollapsibleList
  //             numberOfVisibleItems={0}
  //             wrapperStyle={styles.wrapperCollapsibleList}
  //             buttonContent={
  //               <View style={styles.button}>
  //                 <Text style={styles.buttonText}>Ellison Hall</Text>
  //               </View>
  //             }>
  //             <View style={styles.collapsibleItemFemale}>
  //               <ListElement text='Ellison Hall 1725' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //               <ListElement text='Ellison Hall 1726' gender='male' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemFemale}>
  //               <ListElement text='Ellison Hall 2634' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemFemale}>
  //               <ListElement text='Ellison Hall 2725' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //             <ListElement text='Ellison Hall 2726' gender='male' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //             <ListElement text='Ellison Hall 3634' gender='male' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemFemale}>
  //             <ListElement text='Ellison Hall 3725' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //             <ListElement text='Ellison Hall 3726' gender='male' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemFemale}>
  //             <ListElement text='Ellison Hall 4725' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //             <ListElement text='Ellison Hall 4726' gender='male' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemFemale}>
  //             <ListElement text='Ellison Hall 5725' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //             <ListElement text='Ellison Hall 5726' gender='male' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemFemale}>
  //             <ListElement text='Ellison Hall 6725' gender='female' access='none' />
  //             </View>
  //             <View style={styles.collapsibleItemMale}>
  //             <ListElement text='Ellison Hall 6726' gender='male' access='none' />
  //             </View>

  //         </CollapsibleList>
  //       </View>
  //   </ScrollView>
  //   </View>
  // );
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
  collapsibleItemText: {
    fontSize: 24,
    textAlign: 'left',
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
  },
});
