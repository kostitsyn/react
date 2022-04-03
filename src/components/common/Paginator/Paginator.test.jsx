import React from 'react';
import {create} from 'react-test-renderer';
import Paginator from './Paginator';


describe('Paginator component tests', () => {
    test('pages count is 5 but should be showed only 2', () => {
        const component = create(<Paginator totalObjectsCount={5} pageSize={1} portionSize={2}/>)
        const root = component.root;
        const spans = root.findAllByType('span');
        expect(spans.length).toBe(2);
    });
    test('if pages count is more than 10 button NEXT should be displayed', () => {
        const component = create(<Paginator totalObjectsCount={20} pageSize={1} portionSize={5}/>)
        const root = component.root;
        const buttons = root.findAllByType('button');
        expect(buttons.length).toBe(1);
        console.log(buttons[0].props)
        expect(buttons[0].props.children).toBe('NEXT');
    })
})

