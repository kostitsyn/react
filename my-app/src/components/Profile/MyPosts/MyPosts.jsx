import Post from "./Post/Post";
import c from './MyPosts.module.css';

const MyPosts = () =>
    <div>
        My posts
        <div>
            New post
        </div>
        <div className={c.posts}>
            <Post message='Hello world!' likeQuantity='12' />
            <Post message="I'am here!" likeQuantity='2' />
            <Post message="Lorem ipsum dolores" likeQuantity='100' />
            <Post message="Бесперспективно искать в драке проигравших обреченных на победу!" likeQuantity='32' />
        </div>
    </div>

export default MyPosts;