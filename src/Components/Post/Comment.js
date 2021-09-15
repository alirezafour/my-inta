const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <h3>{comment.author}</h3>
            <p>{comment.text}</p>
        </div>
    )
};
export default Comment;