import Post from './Post/Post';

const Posts = ({ posts }) => {

    return (
        <div>
            {posts.length > 0 ?
                //map through posts and call each post with Post component
                posts.map((post) => (
                    <Post key={post.id} post={post} />)) :
                <h3> No Post available </h3>
            }
        </div>
    )
};

export default Posts;