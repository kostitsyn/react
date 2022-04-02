import React from 'react';
import {create, act} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Test ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus profile={{id: 1}} status='hello world'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('hello world');
    });
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus profile={{id: 1}} status='hello world' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test('after creation <input> shouldn\'t be displayed', () => {
        const component = create(<ProfileStatus profile={{id: 1}} status='hello world' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus profile={{id: 1, aboutMe: 'hello world'}} />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('hello world');
    });
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus saveStatus={() => {}} profile={{id: 1}} userId={1} status='hello world'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('hello world')
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus saveStatus={mockCallback} profile={{id: 1}} userId={1} status='hello world'/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});