import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const PostLike = () => {
    const likedByMe = false;
    return (
        <div className="post-like">
            {likedByMe ?
                <FcLike /> :
                <FcLikePlaceholder />
            } <p>like bar here</p>
        </div>
    )
};

export default PostLike;