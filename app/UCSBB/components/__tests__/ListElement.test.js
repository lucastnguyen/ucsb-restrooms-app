import React from 'react';
import {shallow} from 'enzyme';
import ListElement from '../ListElement';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('List Element', () => {
    describe('Rendering Male/Accessible', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ListElement text='Test 0001' gender='male' access='wheelchair'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('List Element', () => {
    describe('Rendering Male/Not Accessible', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ListElement text='Test 0002' gender='male' access='none'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('List Element', () => {
    describe('Rendering Female/Accessible', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ListElement text='Test 0003' gender='female' access='wheelchair'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('List Element', () => {
    describe('Rendering Female/Not Accessible', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ListElement text='Test 0004' gender='female' access='none'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('List Element', () => {
    describe('Rendering Neutral/Accessible', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ListElement text='Test 0005' gender='neutral' access='wheelchair'/>)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('List Element', () => {
    describe('Rendering Neutral/Not Accessible', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ListElement text='Test 0006' gender='neutral' access='none'/>)
            expect(component).toMatchSnapshot()
        });
    });
});