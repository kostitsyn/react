import React from 'react';
import User from './User/User';
import c from './Users.module.css';

const Users = (props) => {
    if (props.excludeCurrentUser.length === 0) {
        props.setUsers(
            [
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
        )
    }

    let userElements = props.excludeCurrentUser.map(u => <User addFriend={props.addFriend}
                                                               deleteFriend={props.deleteFriend}
                                                               friends={props.friendsId}
                                                               user={u} key={u.id} />);
    return (
        <div className={c.users}>
            {userElements}
        </div>
    )
}

export default Users;
