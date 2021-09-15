import PostHeader from './PostHeader';
import PostLike from './PostLike';
import Comments from './Comments';

const Post = ({ post }) => {
    console.log(post.imageUrl);
    return (
        <div className="post">
            <PostHeader author={post.author} />
            <img className="post-image" src={post.imageUrl} />
            <PostLike />
            <p>{post.text}</p>
            <Comments comments={post.comments} />
        </div>
    )
};

export default Post;