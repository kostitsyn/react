let store = {
    render () {
        console.log('render');
    },
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, author: 100, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
                {id: 2, author: 100, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
                {id: 3, author: 100, message: "Устроился на работу мечты", likes: 100000, comments: 3}
            ]
        },
        messagesPage: {
            newMessageText: '',
            messages: [
                {user_id: 1},
                {user_id: 2},
                {user_id: 3},
            ],
            dialogs: [
                {
                    id: 1, messages: [{user_id: 100, message: 'hello'}, {user_id: 1, message: 'you too'}, {user_id: 100, message: 'super'}]
                },
                {
                    id: 2,
                    messages: [{user_id: 2, message: 'good morning'}, {user_id: 100, message: 'you too'}, {user_id: 2, message: 'go home'}]
                },
                {
                    id: 3,
                    messages: [{user_id: 100, message: 'you sick'}, {user_id: 3, message: 'you too'}, {user_id: 100, message: 'fuck you'}]
                },
            ]
        },
        friends: [
            {user_id: 1},
            {user_id: 4},
            {user_id: 5},
            {user_id: 6},
            {user_id: 7},
            {user_id: 8},
        ],
        users: [
            {id: 1, name: "Фродо Бэггинс", imgLink: "https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png} alt='logo'"},
            {id: 2, name: "Лектер Ганнибал", imgLink: "https://s3.yugopolis.ru/media/media/cache/news/data/img/cdbb04ac08902ad689d7e0cd19585b33/107841.jpg"},
            {id: 3, name: "Немезис", imgLink: "https://s2.hostingkartinok.com/uploads/images/2012/08/617f0d57c28066df47b8d47c973d877d.jpg"},
            {id: 4, name: 'Пинхед', imgLink: 'https://image.tmdb.org/t/p/original/8gAvVDbxtWYw3KzyUAPQ4Ddd0AL.jpg'},
            {id: 5, name: 'Джейсон', imgLink: 'https://avatars.mds.yandex.net/get-zen_doc/41204/pub_5d2bb3b4ac412400ae8f3cea_5d2bb50c998ed600acf9b478/scale_1200'},
            {id: 6, name: 'Фред', imgLink: 'https://i.pinimg.com/originals/2f/09/9d/2f099d05fd0017a450325120584c00d3.jpg'},
            {id: 7, name: 'Пеннивайз', imgLink: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Pennywise_It.jpg/274px-Pennywise_It.jpg'},
            {id: 8, name: 'Кощей', imgLink: 'https://regnum.ru/uploads/pictures/news/2016/07/15/regnum_picture_146861212866714_normal.jpg'},
            {id: 100, name: 'Александр', imgLink: 'https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/93485935_109332727408156_4462720764302327808_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=85a577&_nc_ohc=UUV6Es8WJYYAX-pY8Vr&_nc_ht=scontent-hel3-1.xx&oh=00_AT-ZZksQ9iQAklBnEhE0VgkYp4E9UKZ9kIjo1uni8LpH5w&oe=61F5B280'},
        ]
    },

    addPost (author) {
        let lastId = this._state.profilePage.posts[this._state.profilePage.posts.length-1].id;
        let newPost = {
            id: ++lastId,
            author: author,
            message: this._state.profilePage.newPostText,
            likes: 0,
            comments: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.render(this._state);
    },

    updatePost (text) {
        this._state.profilePage.newPostText = text;
        this.render(this._state);
    },

    addMessage (dialog_id) {
        let currentDialogs = this._state.messagesPage.dialogs.find(d => d.id == dialog_id);
        let newMessage = {
            user_id: 100,
            message: this._state.messagesPage.newMessageText
        }
        currentDialogs.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this.render(this._state);
    },

    updateMessage (text) {
        this._state.messagesPage.newMessageText = text;
        this.render(this._state);
    },

    setSubscribe (observer) {
        this.render = observer;
    },

    getState () {
        return this._state;
    }
}

export default store;
