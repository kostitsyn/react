import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = () => {
    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea id='addPost'/>
                <button>Сохранить</button>
            </div>
            <div className={c.posts}>
                Posts:
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

export default Posts;