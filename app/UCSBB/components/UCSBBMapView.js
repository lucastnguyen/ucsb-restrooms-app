import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class UCSBBMapView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
	          latitude: 34.413963,
	          longitude: -119.848946,
	          latitudeDelta: 0.0922,
	          longitudeDelta: 0.0422,
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
			  >
		  	  <Marker
		  	    coordinate={{latitude: 34.41618, longitude: -119.84464,}}
		  	    title={"Phelps Hall"}
		  	    description={"desc"}
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
