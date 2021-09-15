import PostHeader from './PostHeader';
import PostLike from './PostLike';

const Post = ( { post }) => {
    return (
        <div className="post">
            <PostHeader author={post.author} />
            <p>{post.text}</p>
            <PostLike />
        </div>
    )
};

export default Post;