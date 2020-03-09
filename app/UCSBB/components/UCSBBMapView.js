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

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
  });
};

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
					}
					else if(gender == "male"){
						genderColor = "#0000FF";
						gender = "Male";
					}
					else{
						genderColor = "#32CD32";
						gender = "All Gender";
					}
					if(load)
						views.push(
							{ 
								title: mtitle,
								coordinates: {latitude: lat, longitude: long,}, 
								pinColor: genderColor,  
								description: gender,
							}
						);
					load = true;
			      }
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
				latitudeDelta: 0.0001015,
				longitudeDelta: 0.000911,
			},
			buildings: [],
			markers: [],
		}
	}

	componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        });
      }
    });
  }

	onRegionChange(region) {
		this.setState({region});
	}

	onRegionChangeComplete(region) {
		if(region.latitude > LAT + 0.0052){
			region.latitude = LAT + 0.0052;
		}
		if(region.latitude < LAT - 0.0072){
			region.latitude = LAT - 0.0072;
		}
		if(region.longitude > LONG + 0.008){
			region.longitude = LONG + 0.008;
		}
		if(region.longitude < LONG - 0.0094){
			region.longitude = LONG - 0.0094;
		}
		this.map.animateCamera(
			{center: {latitude: region.latitude, longitude: region.longitude}}
		);
	}

	render() {
		return (
			<View style={styles.container}>
		  	  <MapView
			    style = {styles.mapStyle}
			    region = {this.state.region}
			    ref = {map => {this.map = map}}
			    onRegionChangeComplete={(region) => {this.onRegionChangeComplete(region)}}
			    mapType = "standard"
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

/*
Previous building markers

<Marker
						coordinate={{latitude: 34.416161, longitude: -119.844639,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Phelps Hall"}
						description={"Phelps 1501 Phelps 2501 Phelps 3501"}
		  	  />
					<Marker
						coordinate={{latitude: 34.412468, longitude: -119.849402,}}
						title={"Arts Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.412799, longitude: -119.844914,}}
						title={"Bioengineering Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413207, longitude: -119.842200,}}
						title={"Bren Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.414081, longitude: -119.843084,}}
						title={"Broida Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415422, longitude: -119.844569,}}
						title={"Buchanan Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415429, longitude: -119.842616,}}
						title={"Chemistry Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415575, longitude: -119.845265,}}
						title={"Ellison Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415263, longitude: -119.840039,}}
						title={"Elings Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.412146, longitude: -119.855813,}}
						title={"Embarcadero Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415604, longitude: -119.841348,}}
						title={"Engineering Science"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.414951, longitude: -119.841300,}}
						title={"Engineering II"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413495, longitude: -119.847191,}}
						title={"Girvetz Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413832, longitude: -119.841375,}}
						title={"Harold Frank Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413998, longitude: -119.850345,}}
						title={"Humanities & Social Sciences Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.411358, longitude: -119.854811,}}
						title={"Isla Vista Theater"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.414535, longitude: -119.846780,}}
						title={"Kerr Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413710, longitude: -119.845535,}}
						title={"Library"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.411864, longitude: -119.843791,}}
						title={"Life Sciences Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.412295, longitude: -119.847303,}}
						title={"Music Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.412596, longitude: -119.843781,}}
						title={"Noble Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.414995, longitude: -119.846526,}}
						title={"North Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415455, longitude: -119.843582,}}
						title={"Physical Science North"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.414542, longitude: -119.842637,}}
						title={"Physical Science South"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.411928, longitude: -119.845078,}}
						title={"Psychology Building"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.415213, longitude: -119.849500,}}
						title={"Social Sciences & Media Studies"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413877, longitude: -119.847609,}}
						title={"South Hall"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.412406, longitude: -119.851322,}}
						title={"Theater and Dance West"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.411589, longitude: -119.847969,}}
						title={"University Center"}
						description={"description"}
		  	  />
					<Marker
						coordinate={{latitude: 34.413383, longitude: -119.843758,}}
						title={"Webb Hall"}
						description={"description"}
		  	  />
		  	  */
