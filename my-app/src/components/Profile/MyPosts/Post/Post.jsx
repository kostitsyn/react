import c from './Post.module.css';

const Post = (props) =>
    <div className={c.item}>
        <img src='http://img.crazys.info/files/i/2012.8.13/1344850550_1343070467_tiago_hoisel_16.jpg'></img>
        {props.message}
        <div>
            <span>like {props.likeQuantity}</span>
        </div>
    </div>

export default Post;