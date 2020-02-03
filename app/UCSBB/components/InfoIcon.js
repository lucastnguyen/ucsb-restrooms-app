import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function InfoIcon(props) {
  return (
    <FontAwesome
      name={props.name}
      size={34}
      color={Colors.infoIcon}
    />
  );
}
