const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';


let initialState = {
            newPostText: '',
            posts: [
                {id: 1, author: 100, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
                {id: 2, author: 100, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
                {id: 3, author: 100, message: "Устроился на работу мечты", likes: 100000, comments: 3}
            ]
        }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let lastId = state.posts[state.posts.length-1].id;
            let newPost = {
                id: ++lastId,
                author: action.author_id,
                message: state.newPostText,
                likes: 0,
                comments: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case UPDATE_POST: {
            return {...state, newPostText: action.text};
        }
        default:
            return state;
    }
}

export const updatePostText = (text) => ({type: UPDATE_POST, text});
export const addPost = (author_id) => ({type: ADD_POST, author_id});

export default profileReducer;