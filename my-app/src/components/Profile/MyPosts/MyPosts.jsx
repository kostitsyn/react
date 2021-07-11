import Post from "./Post/Post";
import c from './MyPosts.module.css';

let postsData = [
    {id: 1, message: 'Hello world!', likeQuantity: 12},
    {id: 2, message: 'I\'am here!', likeQuantity: 2},
    {id: 3, message: 'Lorem ipsum dolores', likeQuantity: 100},
    {id: 4, message: 'Бесперспективно искать в драке проигравших обреченных на победу!', likeQuantity: 32},
]

const MyPosts = () =>
    <div className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </div>
        <div className={c.posts}>
            <Post message={postsData[0].message} likeQuantity={postsData[0].likeQuantity} />
            <Post message={postsData[1].message} likeQuantity={postsData[1].likeQuantity} />
            <Post message={postsData[2].message} likeQuantity={postsData[2].likeQuantity} />
            <Post message={postsData[3].message} likeQuantity={postsData[3].likeQuantity} />
        </div>
    </div>

export default MyPosts;