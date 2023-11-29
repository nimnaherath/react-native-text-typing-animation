import React from 'react';
import { View } from 'react-native';

import type { CurserComponentProps } from './type';

const CurserComponent = ({
  curserBlink,
  curserColor = 'black',
}: CurserComponentProps) => {
  return (
    <View
      style={{
        backgroundColor: curserBlink ? curserColor : 'transparent',
        width: 5,
        height: 20,
      }}
    ></View>
  );
};

export default CurserComponent;
