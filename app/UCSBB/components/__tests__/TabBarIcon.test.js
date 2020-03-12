import React from 'react';
import TabBarIcon from '../TabBarIcon';
import TestRenderer from 'react-test-renderer';
import { Platform } from 'react-native';

describe ('Tab Bar Icon', () => {
    it('should render the unfocused Map icon', () => {
        const focused = false;
        const component = TestRenderer.create(<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-map`: 'md-map'}/>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render the unfocused Bathrooms icon and match to snapshot', () => {
        const focused = false;
        const component = TestRenderer.create(<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-list-box`: 'md-list-box'}/>).toJSON();        
        expect(component).toMatchSnapshot();
    });

    it('should render the unfocused Settings icon and match to snapshot', () => {
        const focused = false;
        const component = TestRenderer.create(<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-options`: 'md-options'}/>).toJSON();
        expect(component).toMatchSnapshot();
    });
    it('should render the focused Map icon', () => {
        const focused = true;
        const component = TestRenderer.create(<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-map`: 'md-map'}/>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render the focused Bathrooms icon and match to snapshot', () => {
        const focused = true;
        const component = TestRenderer.create(<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-list-box`: 'md-list-box'}/>).toJSON();        
        expect(component).toMatchSnapshot();
    });

    it('should render the focused Settings icon and match to snapshot', () => {
        const focused = true;
        const component = TestRenderer.create(<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-options`: 'md-options'}/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});