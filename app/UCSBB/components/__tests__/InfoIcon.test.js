import React from 'react';
import InfoIcon from '../InfoIcon';
import TestRenderer from 'react-test-renderer';

describe ('Info Icon', () => {
    it('should render the Male icon and match to snapshot', () => {
        const component = TestRenderer.create(<InfoIcon name='male'/>).toJSON(); //shallow(<InfoIcon name='male'/>)
        expect(component).toMatchSnapshot();
    });

    it('should render the Female icon and match to snapshot', () => {
        const component = TestRenderer.create(<InfoIcon name='female'/>).toJSON(); //shallow(<InfoIcon name='female'/>)
        expect(component).toMatchSnapshot();
    });

    it('should render the Neutral icon and match to snapshot', () => {
        const component = TestRenderer.create(<InfoIcon name='user'/>).toJSON(); //shallow(<InfoIcon name='user'/>)
        expect(component).toMatchSnapshot();
    });

    it('should render the Wheelchair icon and match to snapshot', () => {
        const component = TestRenderer.create(<InfoIcon name='wheelchair'/>).toJSON(); //shallow(<InfoIcon name='wheelchair'/>)
        expect(component).toMatchSnapshot();
    });
});
