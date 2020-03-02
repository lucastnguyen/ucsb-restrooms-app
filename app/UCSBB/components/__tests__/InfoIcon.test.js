import React from 'react';
import InfoIcon from '../InfoIcon';
import TestRenderer from 'react-test-renderer';
/*
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
*/

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

/*
describe('Info Icon', () => {
    describe('Rendering Female Icon', () => {
        it('should match to snapshot', () => {
            const component = shallow(<InfoIcon name='female'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('Info Icon', () => {
    describe('Rendering Neutral Icon', () => {
        it('should match to snapshot', () => {
            const component = shallow(<InfoIcon name='user'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('Info Icon', () => {
    describe('Rendering Wheelchair Icon', () => {
        it('should match to snapshot', () => {
            const component = shallow(<InfoIcon name='wheelchair'/>)
            expect(component).toMatchSnapshot()
        });
    });
});
*/