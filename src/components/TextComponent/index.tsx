import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';
import type { TextProps } from './type';

const TextComponent = ({ children, style }: TextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextComponent;
