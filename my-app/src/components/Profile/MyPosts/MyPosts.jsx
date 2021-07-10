import Post from "./Post/Post";
import c from './MyPosts.module.css';

let posts = [
    {id: 1, message: 'Hello world!', likeQuantity: 12},
    {id: 2, message: 'I\'am here!', likeQuantity: 2},
    {id: 3, message: 'Lorem ipsum dolores', likeQuantity: 100},
    {id: 4, message: 'Бесперспективно искать в драке проигравших обреченных на победу!', likeQuantity: 32},
]

let postsElements = posts.map(p => <Post message={p.message} likeQuantity={p.likeQuantity} />);

const MyPosts = () =>
    <div className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Добавить</button>
        </div>

        <div className={c.posts}>
            {postsElements}
        </div>
    </div>

export default MyPosts;