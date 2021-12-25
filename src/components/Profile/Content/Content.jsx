import c from './Content.module.css';

const Content = () => {
    return (
        <div className={c.content}>
            <div>Content header</div>
            <div>User information</div>
            <div>User data</div>
            <div>User photos</div>
            <div>Add post</div>
            <div>
                Posts
                <div>Post1</div>
                <div>Post2</div>
                <div>Post3</div>
            </div>
        </div>
    )
}

export default Content;