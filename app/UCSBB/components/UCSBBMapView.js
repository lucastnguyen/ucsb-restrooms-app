import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class UCSBBMapView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
	          		latitude: 34.413963,
				longitude: -119.846446,
				latitudeDelta: 0.00205,
				longitudeDelta: 0.00222,
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
			    minZoomLevel = {0}
			    mapPadding={{top: 0, right: 0, bottom: 50, left: 0}} // For position of location button
			  >
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
