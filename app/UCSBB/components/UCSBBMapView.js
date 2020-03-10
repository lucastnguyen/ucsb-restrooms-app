import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import {db} from '../firebase.js';
//import console = require('console');

var rootRef = db.ref('/Buildings');
console.log(rootRef)
var buildingList;

// display data objects when database is modified
rootRef.on("child_changed", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// retrieve keys
rootRef.once("value", (snapshot) =>{
  var data = snapshot.val();
  buildingList = Object.keys(data);
});

var lists = [];

const LAT = 34.413963;
const LONG = -119.846446;
const {width, height} = Dimensions.get('window');

export default class UCSBBMapView extends Component {

	componentDidMount(){
		rootRef.on("value", (snapshot) =>{
			let data = snapshot.val();
			let buildingList = Object.keys(data);
			this.state.buildings = buildingList;
			var views = [];
			var load = true;
			for(var i=0; i<buildingList.length; i++){
			    rootRef.child(buildingList[i]).on("value", function(snapshot){
			      	var data = snapshot.val();
			      	var roomList = Object.keys(data);
					var coords = [];
					var temp = [];
					var allGender = false;
					var genNum = 0;
			    	for (var j=0; j<roomList.length; j++){
						var room = roomList[j];
						var mtitle = buildingList[i] + " " + room; 
						var lat = data[room].Latitude;
						var long = data[room].Longitude;
						if(!lat || !long){
							load = false;
						}
						var gender = data[room].Gender;
						var genderColor = "rgb(255,20,147)";

						if(gender == "female"){
							genderColor = "rgb(255,20,147)";
							gender = "Female";
							genNum = 0;
						}
						else if(gender == "male"){
							genderColor = "#0000FF";
							gender = "Male";
							genNum = 1;
						}
						else{
							genderColor = "#32CD32";
							gender = "All Gender";
							allGender = true;
							genNum = 2;
						}
						if(load){
							var dupe = false;
							for(var x = 0; x < coords.length; x++){
								if(coords[x][0] == lat && coords[x][1] == long){
									temp[x].title += ", " + room;
									temp[x].description += ", " + room + " (" + gender + ")";
									if(allGender)
										temp[x].pinColor = "#32CD32";
									else if(coords[x][2] != genNum && temp[x].pinColor != "#32CD32")
										temp[x].pinColor = "rgb(148,0,211)";
									dupe = true;
									break;
								}
							}
							if(!dupe){
								coords.push([lat,long, genNum]);
								temp.push(
								{ 
									title: mtitle,
									coordinates: {latitude: lat, longitude: long,}, 
									pinColor: genderColor,  
									description: room + " (" + gender + ")",
								});
								//console.log(temp);
							}
							allGender = false;
						}
						load = true;
					}
					temp.forEach(function(mark){
						views.push(mark);
					}
					);
			    }
			    );

			}
			this.setState({region: {
	      		latitude: LAT,
				longitude: LONG,
				latitudeDelta: 0.02305,
				longitudeDelta: 0.01055,
			},
			buildings: buildingList, 
			markers: views,});
		});
	}
	constructor(props) {
		super(props);
		this.state = {
			region: {
	      		latitude: LAT,
				longitude: LONG,
				latitudeDelta: 0.02305,
				longitudeDelta: 0.01055,
			},
			buildings: [],
			markers: [],
		}
	}

	onRegionChange(region) {
		this.setState({region});
	}

	// onRegionChangeComplete(region) {
	// 	if(region.latitude > LAT + 0.0052){
	// 		region.latitude = LAT + 0.0052;
	// 	}
	// 	if(region.latitude < LAT - 0.0072){
	// 		region.latitude = LAT - 0.0072;
	// 	}
	// 	if(region.longitude > LONG + 0.008){
	// 		region.longitude = LONG + 0.008;
	// 	}
	// 	if(region.longitude < LONG - 0.0094){
	// 		region.longitude = LONG - 0.0094;
	// 	}
	// 	this.map.animateCamera(
	// 		{center: {latitude: region.latitude, longitude: region.longitude}}
	// 	);
	// }

	render() {
		return (
			<View style={styles.container}>
		  	  <MapView
			    style = {styles.mapStyle}
			    region = {this.state.region}
			    // onRegionChangeComplete={(region) => {this.onRegionChangeComplete(region)}}
			    mapType = "standard"
			    ref = {map => {this.map = map}}
				provider = {MapView.PROVIDER_GOOGLE}
				showsUserLocation = {true}
			    showsMyLocationButton = {true}
			    minZoomLevel = {15}
			    mapPadding={{top: 0, right: 0, bottom: 50, left: 0}} // For position of location button
			  >
		  	  {
		  	  	this.state.markers.map((marker,index) => (
		  	  		<MapView.Marker
		  	  			key = {index}
		  	  			coordinate = {marker.coordinates}
						title = {marker.title}
						pinColor = {marker.pinColor}
						description = {marker.description}
		  	  		/>))
		  	  }
			  </MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mapStyle: {
	  width: Dimensions.get('window').width,
	  height: Dimensions.get('window').height,
	},
	container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});