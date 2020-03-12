import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function InfoIcon(props) {
  // set iconColor to red, blue, or black based on gender
  var iconColor;
  if (props.name == 'male') {
    iconColor = '#3399ff';
  }
  else if (props.name == 'female') {
    iconColor = '#ff6666';
  }
  else if (props.name == 'wheelchair') {
    iconColor = '#002699';
  }
  //if not wheelchair accessible, set color of icon to white 
  else if (props.name == 'none') {
    iconColor = '#ffffff';
  }
  else {
    iconColor = '#aa80ff';
  }
  return (
    <FontAwesome
      name={props.name}
      size={38}
      color={iconColor}
    />
  );
}
