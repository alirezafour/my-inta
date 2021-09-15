import Comment from './Comment';

const Comments = ({ comments }) => {
    
    return (
        <div className="comments">
            {
                comments.length > 0 ?
                    comments.map((comment) =>
                        <Comment comment={comment} />
                ) :
                    <h3>no comments</h3>
            }
        </div>
    )
};

export default Comments;