import React from 'react';

import Colors from '../constants/Colors';
import InfoIcon from '../components/InfoIcon';
import { Text, View } from 'react-native';


export default function ListElement(props) {
  var whitespace = '                                                     ';
  if (props.gender == 'male' && props.accessible == 'wheelchair') {
    return (
        <Text style = {{ fontSize: 24, fontFamily: 'Courier', textAlign: 'left' }}> 
        {(props.text + whitespace).slice(0,21)} 
        <InfoIcon name = 'wheelchair' />
        {' '}
        <InfoIcon name = 'male' />
        </Text>
      );
  } else if (props.gender == 'male') {
    return (
        <Text style = {{ fontSize: 24, textAlign: 'left' }}> 
        {(props.text + whitespace).slice(0,21)} 
        <InfoIcon name = 'male' />
        </Text>
      );
  } else if (props.gender == 'female' && props.accessible == 'wheelchair') {
    return (
        <Text style = {{ fontSize: 24, fontFamily: 'Courier', textAlign: 'left' }}> 
        {(props.text + whitespace).slice(0,21)} 
        <InfoIcon name = 'wheelchair' />
        {' '}
        <InfoIcon name = 'female' />
        </Text>
      );
  } else {
    return (
        <Text style = {{ fontSize: 24, textAlign: 'left' }}> 
        {(props.text + whitespace).slice(0,42)} 
        <InfoIcon name = 'female' />
        </Text>
      );
  }
    
}
