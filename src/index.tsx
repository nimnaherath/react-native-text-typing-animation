import React, { useState } from 'react';
import { Text, type TextStyle } from 'react-native';

type Props = {
  text: string;
  style?: TextStyle;
  curserColor?: string;
  cursorBlink?: number;
  duration?: number;
};

const AnimatedTyping = ({
  text,
  style,
  curserColor = 'black',
  cursorBlink = 100,
  duration = 200,
}: Props) => {
  const [animationStarted, setAnimationStarted] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [curserBlink, setCurserBlink] = useState(true);

  if (animationStarted) {
    if (textIndex <= text.length) {
      setTimeout(() => {
        setDisplayedText(text.substring(0, textIndex));
        setTextIndex(textIndex + 1);
      }, duration);
    } else {
      setAnimationStarted(false);
    }
  }

  setTimeout(() => {
    setCurserBlink(!curserBlink);
  }, cursorBlink);

  const textStyle: TextStyle = {
    ...style,
  };

  const curserStyle: TextStyle = {
    paddingLeft: 2,
    color: curserBlink ? curserColor : 'transparent',
  };

  return (
    <Text style={textStyle}>
      {displayedText}
      {animationStarted && <Text style={curserStyle}>|</Text>}
    </Text>
  );
};

export default AnimatedTyping;
