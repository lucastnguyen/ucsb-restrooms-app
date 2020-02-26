import React from 'react';
import renderer from 'react-test-renderer'
import UCSBBMapView from '../UCSBBMapView.js'

describe('UCSBBMapView', () =>{
	it('should render the map view with our custom parameters and markers', () => {
		const comp = renderer.create(<UCSBBMapView />).toJSON();
		expect(comp).toMatchSnapshot();
	})
})