
let store = {
    _subscriber() {
        console.log('No subscribers (observers)');
    },
    _state: {
        sidebar: {
            navbar: [
                {id: 1, navName: 'Profile'},
                {id: 2, navName: 'Messages'},
                {id: 3, navName: 'News'},
                {id: 4, navName: 'Music'},
                {id: 5, navName: 'Settings'}
            ],
            friends: [
                {
                    id: 1,
                    name: 'Kostya',
                    ava: 'https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png'
                },
                {
                    id: 2,
                    name: 'Anton',
                    ava: 'data:image/jpeg;base64,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'
                },
                {
                    id: 3,
                    name: 'Ivan',
                    ava: 'https://i.pinimg.com/originals/fb/46/64/fb4664f0cd24d42162b765c6034c5a40.jpg'
                },
            ],
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likeQuantity: 12},
                {id: 2, message: 'I\'am here!', likeQuantity: 2},
                {id: 3, message: 'Lorem ipsum dolores', likeQuantity: 100},
                {id: 4, message: 'Бесперспективно искать в драке проигравших обреченных на победу!', likeQuantity: 32},
            ],
            newPostText: '',

        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Ivan',
                    ava: 'https://s3.yugopolis.ru/media/media/cache/news/data/img/cdbb04ac08902ad689d7e0cd19585b33/107841.jpg'
                },
                {
                    id: 2,
                    name: 'Andrey',
                    ava: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Pennywise_It.jpg/274px-Pennywise_It.jpg'
                },
                {
                    id: 3,
                    name: 'Aleksey',
                    ava: 'https://i.pinimg.com/originals/2f/09/9d/2f099d05fd0017a450325120584c00d3.jpg'
                },
                {
                    id: 4,
                    name: 'Vitaliy',
                    ava: 'https://avatars.mds.yandex.net/get-zen_doc/41204/pub_5d2bb3b4ac412400ae8f3cea_5d2bb50c998ed600acf9b478/scale_1200'
                },
                {id: 5, name: 'Sergey', ava: 'https://image.tmdb.org/t/p/original/8gAvVDbxtWYw3KzyUAPQ4Ddd0AL.jpg'},
                {
                    id: 6,
                    name: 'Innokentiy',
                    ava: 'https://s2.hostingkartinok.com/uploads/images/2012/08/617f0d57c28066df47b8d47c973d877d.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hello!', sender: 1, recipient: 2},
                {id: 2, message: 'What\'s up nigga!', sender: 2, recipient: 1},
                {id: 4, message: 'I\'m fine!', sender: 1, recipient: 2},
                {id: 5, message: 'And how are you?', sender: 1, recipient: 2},
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    addPost() {
        let lastId = this._state.profilePage.posts[this._state.profilePage.posts.length-1].id;
        let newPost = {
            id: ++lastId,
            message: this._state.profilePage.newPostText,
            likeQuantity: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this._state);
    },
    updateNewPostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._subscriber(this._state);
    },
    addMessage() {
        debugger;
        let lastId = this._state.dialogsPage.messages[this._state.dialogsPage.messages.length-1].id;
        let newMessage = {
            id: ++lastId,
            message: this._state.dialogsPage.newMessageText,
            sender: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length-1].sender === 1 ? 2 : 1,
            recipient: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length-1].recipient === 1 ? 2 : 1,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._subscriber(this._state);
    },
    updateMessageText(msgText) {
        this._state.dialogsPage.newMessageText = msgText;
        this._subscriber(this._state);
    },
}

window.store = store;

export default store;
