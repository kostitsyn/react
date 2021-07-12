import c from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={c.friend}>
            <img src={props.state.ava} alt=''></img>
            <div>{props.state.name}</div>
        </div>
    )
}

export default FriendsItem;