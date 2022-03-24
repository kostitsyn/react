import profileReducer, {savePost, deletePost} from './profile-reducer';
import React from 'react';

let state = {
            posts: [
                {id: 1, text: 'lorem', 'likes': 0}
            ],
            profile: null,
            profileOnPage: null
        }

it('length of posts should be incremented', () => {
    let action = savePost('hello world!');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});


it('text of new post should be correct', () => {
    let action = savePost({id: 2, text: 'hello', 'likes': 0});
    let newState = profileReducer(state, action);
    expect(newState.posts[1].text).toBe('hello');
})

it('likes count of new post should be zero', () => {
    let action = savePost({id: 3, text: 'lorem', 'likes': 0});
    let newState = profileReducer(state, action);
    expect(newState.posts[0].likes).toBe(0);
})

it('after deleting messages length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(0);
})

it('after deleting length shouldn\'t be decrement if id', () => {
    let action = deletePost(100);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
})