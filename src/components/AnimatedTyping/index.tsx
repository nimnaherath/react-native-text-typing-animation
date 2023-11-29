import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';
import { type TextStyle } from 'react-native';

import type { Props } from './types';
import CurserComponent from '../CurserComponent';
import TextComponent from '../TextComponent';

export interface AnimatedTextRef {
  start: () => void;
  pause: () => void;
  isCompleted: boolean;
  clear: () => void;
}

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
      textComponent: CustomText = TextComponent,
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

    return (
      <View
        style={{
          flexWrap: 'nowrap',
        }}
      >
        <CustomText style={textStyle}>
          {displayedText}
          {animationStarted && (
            <CurserComponent
              curserColor={curserColor}
              curserBlink={curserBlink}
            />
          )}
        </CustomText>
      </View>
    );
  }
);

export default AnimatedTyping;
