import React from 'react';
import {shallow} from 'enzyme';
import ListElement from '../ListElement';


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