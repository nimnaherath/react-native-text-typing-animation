import { type TextStyle } from 'react-native';

export type Props = {
  text: string;
  style?: TextStyle;
  curserColor?: string;
  cursorBlink?: number;
  duration?: number;
  started?: boolean;
  onCompleted?: () => void;
  textComponent?: React.ComponentType<TextProps>;
};
