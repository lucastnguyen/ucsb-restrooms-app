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
