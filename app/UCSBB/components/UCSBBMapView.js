import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';

const LAT = 34.413963;
const LONG = -119.846446;

export default class UCSBBMapView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
	      latitude: LAT,
				longitude: LONG,
				latitudeDelta: 0.02305,
				longitudeDelta: 0.01055,
			},
		}
	}

	onRegionChange(region) {
		this.setState({region});
	}

	render() {
		return (
			<View style={styles.container}>
		  	  <MapView
			    style = {styles.mapStyle}
			    region = {this.state.region}
			    onRegionChange={(region) => {this.onRegionChange}}
			    mapType = "standard"
				provider = {MapView.PROVIDER_GOOGLE}
				showsUserLocation = {true}
			    showsMyLocationButton = {true}
			    minZoomLevel = {15}
			    mapPadding={{top: 0, right: 0, bottom: 50, left: 0}} // For position of location button
			  >
		  	  <Marker
						coordinate={{latitude: 34.415753, longitude: -119.84478,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Phelps Hall 1501, 2501, 3501"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415253, longitude: -119.844708,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Buchanan Hall 1914"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415259, longitude: -119.844413,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Buchanan Hall 1944"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415451, longitude: -119.845333,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Ellison Hall 1726"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415435, longitude: -119.845231,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Ellison Hall 1725"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.411995, longitude: -119.84523,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Psychology 1318(?)"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.411816, longitude: -119.84523,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Psychology 1317"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.412166, longitude: -119.844653,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Psychology East 1801"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.412166, longitude: -119.844539,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Psychology 1803"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.411833, longitude: -119.843739,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Life Science 1102"}
						description={"FeMale"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.411833, longitude: -119.843689,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Life Science 1104"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.412513, longitude: -119.843853,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Noble Hall 1210"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.412579, longitude: -119.844033,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Noble Hall 1204"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.413201, longitude: -119.843908,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Earth Sciences 1110, 2110"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.413323, longitude: -119.843901,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Earth Sciences 1106, 2106"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.413979, longitude: -119.843315,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Broida Hall 1006"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.413956, longitude: -119.843315,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Broida Hall 1014"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415512, longitude: -119.843586,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Physical Sciences North 1636"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415412, longitude: -119.843586,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"Physical Sciences North 1634"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.41501, longitude: -119.846243,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"North Hall 1126"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.414921, longitude: -119.846235,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"North Hall 1132"}
						description={"Female"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415275, longitude: -119.846712,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"North Hall 1021"}
						description={"Male"}
		  	  />
		  	  <Marker
						coordinate={{latitude: 34.415275, longitude: -119.846914,}}
						//title and description are temporary until onPress is set to open a pop up with bathrooms
						title={"North Hall 1025"}
						description={"All Gender"}
		  	  />
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
