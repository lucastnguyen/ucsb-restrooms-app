import React from 'react';
import renderer from 'react-test-renderer'
import UCSBBMapView from '../UCSBBMapView.js'

jest.mock('react-native-maps', () => {
	const { View } = require('react-native');
	const MockMapView = (props: any) => {
		return <View>{props.children}</View>;
	};
	const MockMarker = (props: any) => {
		return <View>{props.children}</View>;
	};
	return {
		__esModule: true,
		default: MockMapView,
		Marker: MockMarker,
	};
});

describe('UCSBBMapView', () =>{
	it('should render the map view with our custom parameters and markers', () => {
		const component = renderer.create(<UCSBBMapView />).toJSON()
		expect(component).toMatchSnapshot()
	})
})