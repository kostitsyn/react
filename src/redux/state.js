const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
            {id: 2, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
            {id: 3, message: "Устроился на работу мечты", likes: 100000, comments: 3}
        ]
    },
    messagesPage: {
        messages: [
            {
                id: 1,
                name: "Фродо Бэггинс",
                imgLink: "https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png} alt='logo'"
            },
            {
                id: 2,
                name: "Лектер Ганнибал",
                imgLink: "https://s3.yugopolis.ru/media/media/cache/news/data/img/cdbb04ac08902ad689d7e0cd19585b33/107841.jpg"
            },
            {
                id: 3,
                name: "Немезис",
                imgLink: "https://s2.hostingkartinok.com/uploads/images/2012/08/617f0d57c28066df47b8d47c973d877d.jpg"
            }
        ],
        dialogs: [
            {
                id: 1, messages: [{id: 100, message: 'hello'}, {id: 1, message: 'you too'}, {id: 100, message: 'super'}]
            },
            {
                id: 2, messages: [{id: 2, message: 'good morning'}, {id: 100, message: 'you too'}, {id: 2, message: 'go home'}]
            },
            {
                id: 3, messages: [{id: 100, message: 'you sick'}, {id: 3, message: 'you too'}, {id: 100, message: 'fuck you'}]
            },
        ]
    },
    friends: [
            {
                id: 1, name: "Фродо Бэггинс", imgLink: "https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png} alt='logo'"
            },
            {
                id: 3, name: 'Пинхед', imgLink: 'https://image.tmdb.org/t/p/original/8gAvVDbxtWYw3KzyUAPQ4Ddd0AL.jpg'
            },
            {
                id: 4, name: 'Джейсон', imgLink: 'https://avatars.mds.yandex.net/get-zen_doc/41204/pub_5d2bb3b4ac412400ae8f3cea_5d2bb50c998ed600acf9b478/scale_1200'
            },
            {
                id: 5, name: 'Фред', imgLink: 'https://i.pinimg.com/originals/2f/09/9d/2f099d05fd0017a450325120584c00d3.jpg'
            },
            {
                id: 6, name: 'Пеннивайз', imgLink: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Pennywise_It.jpg/274px-Pennywise_It.jpg'
            },
            {
                id: 7, name: 'Кощей', imgLink: 'https://regnum.ru/uploads/pictures/news/2016/07/15/regnum_picture_146861212866714_normal.jpg'
            },
        ],
}

export default state;