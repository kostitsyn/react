import defaultAva from '../../../assets/images/default_ava.png';


const Avatar = ({user, img}) => {
    return (
//            <img src={img ? user.imgFile : user.imgLink ? user.imgLink : defaultAva} alt='avatar'/>
            <img src={img ? img : user.imgLink ? user.imgLink : defaultAva} alt='avatar'/>
    )
}

export default Avatar;