import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {addStrikes} from './utils/addStrikes';
import {addBalls} from './utils/addBalls';

test('App renders without crashing', () =>
{
    render(<App/>);
});

test('addStrikes adds a strike to current strike count', () =>
{
    expect(addStrikes(1)).toBe(2);
});

test('addBalls adds a ball to current ball count', () =>
{
    expect(addBalls(2)).toBe(3);
    expect(addBalls(3)).toBe(0);
})

test('hit button is on the screen', () =>
{
    const {getByTestId} = render(<App/>);
    getByTestId(/hit-button/i);
})