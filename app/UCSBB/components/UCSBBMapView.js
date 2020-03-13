import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, AsyncStorage } from 'react-native';
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

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
  });
};

export default class UCSBBMapView extends Component {

	async storeItem(key, item) {
		try {
			//we want to wait for the Promise returned by AsyncStorage.setItem()
			//to be resolved to the actual value before returning the value
			var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
			return jsonOfItem;
		} catch (error) {
		  console.log(error.message);
		}
	  }
	  async retrieveItem(key) {
		try {
		  const retrievedItem = await AsyncStorage.getItem(key);
		  const item = JSON.parse(retrievedItem);
		  return item;
		} catch (error) {
		  console.log(error.message);
		}
		return
	  }

	  componentDidMountSomething = async () =>{
		this.reloader = this.props.navigation.addListener('didFocus', () => {
			this.reload();
		})

		getCurrentLocation().then(location => {
		if(location){
			this.state.camera = {
				center: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}
			}
		}
	});
	}

	reload = async () => {
		console.log('reloading map')
		let genderKey = await AsyncStorage.getItem('genderPreference');
		let access = await AsyncStorage.getItem('accessibility');
		let genderMap = {0: "all", 1: "male", 2: "female"}
		this.state.gender = genderMap[genderKey];
		this.state.access = access;
	}

	componentDidMount = async () =>{
		console.log("HELLO");
		this.reloader = this.props.navigation.addListener('didFocus', () => {
			this.reload();
		})

		getCurrentLocation().then(location => {
		if(location){
			this.state.camera = {
				center: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}
			}
		}
	});
	}

	constructor(props) {
		super(props);
		this.state = {
			region: {
	      		latitude: LAT,
				longitude: LONG,
				latitudeDelta: 0.0001015,
				longitudeDelta: 0.000911,
			},
			gender: -1,
			access: "true",
			buildings: [],
			markers: [],
			all: [],
			allAccess: [],
			male: [],
			maleAccess: [],
			female: [],
			femaleAccess: [],
		}
		rootRef.on("value", (snapshot) =>{
			let data = snapshot.val();
			let buildingList = Object.keys(data);
			this.state.buildings = buildingList;

			var all = [];
			var male = [];
			var female = [];
			var allAccess = [];
			var maleAccess = [];
			var femaleAccess = [];

			var load = true;
			for(var i=0; i<buildingList.length; i++){
			    rootRef.child(buildingList[i]).on("value", function(snapshot){
			      	var data = snapshot.val();
			      	var roomList = Object.keys(data);
					var coordsAll = [];
					var coordsMale = [];
					var coordsFemale = [];
					var coordsAllAccess = [];
					var coordsMaleAccess = [];
					var coordsFemaleAccess = [];

					var all1 = [];
					var male1 = [];
					var female1 = [];
					var allAccess1 = [];
					var maleAccess1 = [];
					var femaleAccess1 = [];

					var allGender = false;
					var genNum = 0;
			    	for (var j=0; j<roomList.length; j++){
						var room = roomList[j];
						var mtitle = buildingList[i] + " " + room; 
						var accessible = data[room].Accessibility;
						var access = "";
						if(accessible == "True")
							access = ", Acc.";
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
							var allDupe = false;
							var maleDupe = false;
							var femaleDupe = false;
							var allAccessDupe = false;
							var maleAccessDupe = false;
							var femaleAccessDupe = false;

							for(var x = 0; x < coordsAll.length; x++){
								if(coordsAll[x][0] == lat && coordsAll[x][1] == long){
									all1[x].title += ", " + room;
									all1[x].description += ", " + room + " (" + gender + access + ")";
									if(allGender)
										all1[x].pinColor = "#32CD32";
									else if(coordsAll[x][2] != genNum && all1[x].pinColor != "#32CD32"){
										all1[x].pinColor = "rgb(148,0,211)";
									}
									allDupe = true;
									break;
								}
							}
							if(accessible == "True"){
								for(var x = 0; x < coordsAllAccess.length; x++){
									if(coordsAllAccess[x][0] == lat && coordsAllAccess[x][1] == long){
										allAccess1[x].title += ", " + room;
										allAccess1[x].description += ", " + room + " (" + gender + access + ")";
										if(allGender)
											allAccess1[x].pinColor = "#32CD32";
										else if(coordsAllAccess[x][2] != genNum && allAccess1[x].pinColor != "#32CD32"){
											allAccess1[x].pinColor = "rgb(148,0,211)";
										}
										allAccessDupe = true;
										break;
									}
								}
							}
							if(gender == "Male" || gender == "All Gender"){
								for(var x = 0; x < coordsMale.length; x++){
									if(coordsMale[x][0] == lat && coordsMale[x][1] == long){
										male1[x].title += ", " + room;
										male1[x].description += ", " + room + " (" + gender + access + ")";
										if(allGender)
											male1[x].pinColor = "#32CD32";
										maleDupe = true;
										break;
									}
								}
								if(accessible == "True"){
									for(var x = 0; x < coordsMaleAccess.length; x++){
										if(coordsMaleAccess[x][0] == lat && coordsMaleAccess[x][1] == long){
											maleAccess1[x].title += ", " + room;
											maleAccess1[x].description += ", " + room + " (" + gender + access + ")";
											if(allGender)
												maleAccess1[x].pinColor = "#32CD32";
											maleAccessDupe = true;
											break;
										}
									}
								}
							}
							if(gender == "Female" || gender == "All Gender"){
								for(var x = 0; x < coordsFemale.length; x++){
									if(coordsFemale[x][0] == lat && coordsFemale[x][1] == long){
										female1[x].title += ", " + room;
										female1[x].description += ", " + room + " (" + gender + access + ")";
										if(allGender)
											female1[x].pinColor = "#32CD32";
										femaleDupe = true;
										break;
									}
								}
								if(accessible == "True"){
									for(var x = 0; x < coordsFemaleAccess.length; x++){
										if(coordsFemaleAccess[x][0] == lat && coordsFemaleAccess[x][1] == long){
											femaleAccess1[x].title += ", " + room;
											femaleAccess1[x].description += ", " + room + " (" + gender + access + ")";
											if(allGender)
												femaleAccess1[x].pinColor = "#32CD32";
											femaleAccessDupe = true;
											break;
										}
									}
								}
							}
							if(!allDupe){
								coordsAll.push([lat,long, genNum]);
								all1.push(
								{ 
									title: mtitle,
									coordinates: {latitude: lat, longitude: long,}, 
									pinColor: genderColor,  
									description: room + " (" + gender + access + ")",
								});
							}
							if(accessible == "True" && !allAccessDupe){
								coordsAllAccess.push([lat,long, genNum]);
								allAccess1.push(
									{ 
										title: mtitle,
										coordinates: {latitude: lat, longitude: long,}, 
										pinColor: genderColor,  
										description: room + " (" + gender + access + ")",
									});
							}
							if(gender == "Male" || gender == "All Gender"){
								if(!maleDupe){
									coordsMale.push([lat,long, genNum]);
									male1.push(
										{ 
											title: mtitle,
											coordinates: {latitude: lat, longitude: long,}, 
											pinColor: genderColor,  
											description: room + " (" + gender + access + ")",
										});
								}
								if(!maleAccessDupe && accessible == "True"){
									coordsMaleAccess.push([lat,long, genNum]);
									maleAccess1.push(
										{ 
											title: mtitle,
											coordinates: {latitude: lat, longitude: long,}, 
											pinColor: genderColor,  
											description: room + " (" + gender + access + ")",
										});
								}
							}
							if(gender == "Female" || gender == "All Gender"){
								if(!femaleDupe){
									coordsFemale.push([lat,long, genNum]);
									female1.push(
										{ 
											title: mtitle,
											coordinates: {latitude: lat, longitude: long,}, 
											pinColor: genderColor,  
											description: room + " (" + gender + access + ")",
										});
								}
								if(!femaleAccessDupe && accessible == "True"){
									coordsFemaleAccess.push([lat,long, genNum]);
									femaleAccess1.push(
										{ 
											title: mtitle,
											coordinates: {latitude: lat, longitude: long,}, 
											pinColor: genderColor,  
											description: room + " (" + gender + access + ")",
										});
								}
							}
							allGender = false;
						}
						load = true;
					}
					all1.forEach(function(mark){
						all.push(mark);
					});
					female1.forEach(function(mark){
						female.push(mark);
					});
					male1.forEach(function(mark){
						male.push(mark);
					});
					allAccess1.forEach(function(mark){
						allAccess.push(mark);
					});
					maleAccess1.forEach(function(mark){
						maleAccess.push(mark);
					});
					femaleAccess1.forEach(function(mark){
						femaleAccess.push(mark);
					});
			    }
			    );

			}
			return getCurrentLocation().then(position => {
				if (position) {
					this.setState({
						region: {
	      					latitude: position.coords.latitude,
							longitude: position.coords.longitude,
							latitudeDelta: 0.003,
							longitudeDelta: 0.003,	
							},
						buildings: buildingList, 
						all: all,
						allAccess: allAccess,
						male: male,
						maleAccess: maleAccess,
						female: female,
						femaleAccess: femaleAccess,
					});
				}
			});	
		});

		this.retrieveItem("genderPreference").then((goals) => {
			//this callback is executed when your Promise is resolved
			this.state.gender = goals;
			}).catch((error) => {
			//this callback is executed when your Promise is rejected
			console.log('Promise is rejected with error: ' + error);
		});
		this.retrieveItem("accessibility").then((goals) => {
			//this callback is executed when your Promise is resolved
			this.state.access = goals;
			}).catch((error) => {
			//this callback is executed when your Promise is rejected
			console.log('Promise is rejected with error: ' + error);
		});
	}

	onRegionChange(region) {
		this.setState({region});
	}

	render() {
		this.retrieveItem("genderPreference").then((goals) => {
			//this callback is executed when your Promise is resolved
			this.state.gender = goals;
			}).catch((error) => {
			//this callback is executed when your Promise is rejected
			console.log('Promise is rejected with error: ' + error);
		});
		this.retrieveItem("accessibility").then((goals) => {
			//this callback is executed when your Promise is resolved
			this.state.access = goals;
			}).catch((error) => {
			//this callback is executed when your Promise is rejected
			console.log('Promise is rejected with error: ' + error);
		});
		console.log(this.state.gender);
		console.log(this.state.access);

		return (
			<View style={styles.container}>
		  	  <MapView
			    style = {styles.mapStyle}
			    region = {this.state.region}
			    ref = {map => {this.map = map}}
			    mapType = "standard"
				provider = {MapView.PROVIDER_GOOGLE}
				showsUserLocation = {true}
			    showsMyLocationButton = {true}
				minZoomLevel = {15}
				onLongPress= {() => this.forceUpdate()}
				mapPadding={{top: 0, right: 0, bottom: 90, left: 0}} // For position of location button
			  >
		  	  {
		  	  	(this.state.gender == 0 && this.state.access == true) && this.state.allAccess.map((marker,index) => (
		  	  		<MapView.Marker
		  	  			key = {index}
		  	  			coordinate = {marker.coordinates}
						title = {marker.title}
						pinColor = {marker.pinColor}
						description = {marker.description}
		  	  		/>))
		  	  }
			  {
		  	  	this.state.gender == 0 && this.state.access == false && this.state.all.map((marker,index) => (
		  	  		<MapView.Marker
		  	  			key = {index}
		  	  			coordinate = {marker.coordinates}
						title = {marker.title}
						pinColor = {marker.pinColor}
						description = {marker.description}
		  	  		/>))
		  	  }
						  	  {
		  	  	this.state.gender == 1 && this.state.access == true && this.state.maleAccess.map((marker,index) => (
		  	  		<MapView.Marker
		  	  			key = {index}
		  	  			coordinate = {marker.coordinates}
						title = {marker.title}
						pinColor = {marker.pinColor}
						description = {marker.description}
		  	  		/>))
		  	  }
						  	  {
		  	  	this.state.gender == 1 && this.state.access == false && this.state.male.map((marker,index) => (
		  	  		<MapView.Marker
		  	  			key = {index}
		  	  			coordinate = {marker.coordinates}
						title = {marker.title}
						pinColor = {marker.pinColor}
						description = {marker.description}
		  	  		/>))
		  	  }
						  	  {
		  	  	this.state.gender == 2 && this.state.access == true && this.state.femaleAccess.map((marker,index) => (
		  	  		<MapView.Marker
		  	  			key = {index}
		  	  			coordinate = {marker.coordinates}
						title = {marker.title}
						pinColor = {marker.pinColor}
						description = {marker.description}
		  	  		/>))
		  	  }
						  	  {
		  	  	this.state.gender == 2 && this.state.access == false && this.state.female.map((marker,index) => (
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
