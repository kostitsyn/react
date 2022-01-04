const addPost = 'ADD-POST';
const updatePost = 'UPDATE-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let lastId = state.posts[state.posts.length-1].id;
            let newPost = {
                id: ++lastId,
                author: action.author_id,
                message: state.newPostText,
                likes: 0,
                comments: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case updatePost:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const updatePostActionCreator = (text) => ({type: updatePost, text});
export const addPostActionCreator = (author_id) => ({type: addPost, author_id});

export default profileReducer;