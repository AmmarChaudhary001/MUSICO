/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../src/App';

jest.mock('@rntp/player', () => ({
  __esModule: true,
  default: {
    skipToNext: jest.fn(),
    skipToPrevious: jest.fn(),
    play: jest.fn(),
    pause: jest.fn(),
    getActiveMediaItemIndex: jest.fn(() => 0),
    seekTo: jest.fn(),
    registerBackgroundEventHandler: jest.fn(),
  },
  PlayerCommand: {
    PlayPause: 'play-pause',
    Next: 'next',
    Previous: 'previous',
    Seek: 'seek',
  },
  useActiveMediaItem: jest.fn(() => null),
  useProgress: jest.fn(() => ({position: 0, duration: 100})),
  useIsPlaying: jest.fn(() => false),
}));

jest.mock('../playerservice', () => ({
  playerSetup: jest.fn(() => Promise.resolve(true)),
  addTrack: jest.fn(() => Promise.resolve()),
}));

jest.mock('../src/screens/musicplayer', () => {
  const mockReact = require('react');
  const {View} = require('react-native');
  return () => mockReact.createElement(View, {testID: 'music-player'});
});

jest.mock('react-native-safe-area-context', () => {
  const mockReact = require('react');
  const {View} = require('react-native');
  return {
    SafeAreaView: (props: {children?: unknown}) =>
      mockReact.createElement(View, props, props.children),
  };
});

test('renders correctly', async () => {
  let tree: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(async () => {
    tree = ReactTestRenderer.create(<App />);
    await Promise.resolve();
  });

  expect(tree!.toJSON()).toBeTruthy();
});
