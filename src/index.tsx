import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Text, type TextStyle } from 'react-native';

type Props = {
  text: string;
  style?: TextStyle;
  curserColor?: string;
  cursorBlink?: number;
  duration?: number;
  started?: boolean;
  onCompleted?: () => void;
};

export type AnimatedTextRef = {
  start: () => void;
  pause: () => void;
  isCompleted: boolean;
  clear: () => void;
};

const AnimatedTyping = forwardRef<AnimatedTextRef, Props>(
  (
    {
      text,
      style,
      curserColor = 'black',
      cursorBlink = 100,
      duration = 200,
      started = false,
      onCompleted,
    }: Props,
    ref
  ) => {
    const [animationStarted, setAnimationStarted] = useState(started);
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [curserBlink, setCurserBlink] = useState(true);

    useImperativeHandle(ref, () => ({
      start: () => setAnimationStarted(true),
      pause: () => setAnimationStarted(false),
      isCompleted: text.length <= textIndex,
      clear: () => {
        setTextIndex(0);
        setDisplayedText('');
      },
    }));

    if (animationStarted) {
      if (textIndex <= text.length) {
        setTimeout(() => {
          setDisplayedText(text.substring(0, textIndex));
          setTextIndex(textIndex + 1);
        }, duration);
        setTimeout(() => {
          setCurserBlink(!curserBlink);
        }, cursorBlink);
      } else {
        setAnimationStarted(false);
        if (onCompleted) {
          onCompleted();
        }
      }
    }

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
  }
);

export default AnimatedTyping;
