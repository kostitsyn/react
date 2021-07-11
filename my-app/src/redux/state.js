let state = {
    navBar: [
        {id: 1, navName: 'Profile'},
        {id: 2, navName: 'Messages'},
        {id: 3, navName: 'News'},
        {id: 4, navName: 'Music'},
        {id: 5, navName: 'Settings'}
        ],
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world!', likeQuantity: 12},
            {id: 2, message: 'I\'am here!', likeQuantity: 2},
            {id: 3, message: 'Lorem ipsum dolores', likeQuantity: 100},
            {id: 4, message: 'Бесперспективно искать в драке проигравших обреченных на победу!', likeQuantity: 32},
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan', ava: 'https://kartinkinaden.ru/uploads/posts/2019-08/thumbs/1566346784_pennivajz-art-50.jpg'},
            {id: 2, name: 'Andrey', ava: 'https://www.wallpaperup.com/uploads/wallpapers/2013/07/16/118819/9cc0c56cd3b2522ae301e9f4edc66891-1000.jpg'},
            {id: 3, name: 'Aleksey', ava: 'https://i.pinimg.com/originals/2f/09/9d/2f099d05fd0017a450325120584c00d3.jpg'},
            {id: 4, name: 'Vitaliy', ava: 'https://avatars.mds.yandex.net/get-zen_doc/41204/pub_5d2bb3b4ac412400ae8f3cea_5d2bb50c998ed600acf9b478/scale_1200'},
            {id: 5, name: 'Sergey', ava: 'https://image.tmdb.org/t/p/original/8gAvVDbxtWYw3KzyUAPQ4Ddd0AL.jpg'},
            {id: 6, name: 'Innokentiy', ava: 'https://s2.hostingkartinok.com/uploads/images/2012/08/617f0d57c28066df47b8d47c973d877d.jpg'},
        ],
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'What\'s up nigga!'},
            {id: 3, message: 'I\'m fine!'},
        ]
    }
}

export default state;