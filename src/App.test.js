import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import ReactDom from 'react-dom';
import React from 'react';

test('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDom.render(<SamuraiJSApp />, div);
    ReactDom.unmountComponentAtNode(div);
});
