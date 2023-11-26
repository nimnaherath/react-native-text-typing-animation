import React from 'react';
import renderer from 'react-test-renderer';

import AnimatedTyping from '../index';

jest.useFakeTimers();

describe('animated typing component', () => {
  test('component render correctly', () => {
    const textAnimation = renderer
      .create(<AnimatedTyping text="Test" />)
      .toJSON();

    expect(textAnimation).toMatchSnapshot();
  });

  test('it can change style', () => {
    const textAnimation = renderer
      .create(
        <AnimatedTyping
          text="Test"
          style={{ color: 'black', fontSize: 20, fontWeight: '700' }}
        />
      )
      .toJSON();

    expect(textAnimation).toMatchSnapshot();
  });
});
