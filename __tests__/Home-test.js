import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/testing-practice/Home';

test('Home snapShot', () => {
  const snap = renderer.create(
    <Home />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
