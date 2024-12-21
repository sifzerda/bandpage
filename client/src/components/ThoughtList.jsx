import { useQuery, useMutation } from '@apollo/client';
import { GET_THOUGHTS } from '../utils/queries'; // Import GET_COMMENTS
import { ADD_COMMENT } from '../utils/mutations'; // Import ADD_COMMENT
import { useState } from 'react';

const ThoughtList = () => {
  const { loading: thoughtsLoading, error: thoughtsError, data } = useQuery(GET_THOUGHTS);
  const [commentFormVisible, setCommentFormVisible] = useState({});
  const [newComments, setNewComments] = useState({});
  const [addComment] = useMutation(ADD_COMMENT);

  if (thoughtsLoading) return <p>Loading thoughts...</p>;
  if (thoughtsError) return <p>Error: {thoughtsError.message}</p>;

  const thoughts = data?.getThoughts || [];

  const formatDateTime = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    const formattedDate = date.toLocaleDateString('en-GB'); // DD-MM-YYYY
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // AM/PM format
    });
    return `${formattedDate} at ${formattedTime}`;
  };

  const handleCommentButtonClick = (thoughtId) => {
    setCommentFormVisible((prevState) => ({
      ...prevState,
      [thoughtId]: !prevState[thoughtId],
    }));
  };

  const handleCommentSubmit = async (thoughtId, event) => {
    event.preventDefault();
    const comment = newComments[thoughtId];

    try {
      await addComment({
        variables: {
          thoughtId,
          username: 'YourUsername', // Replace with actual user data
          body: comment,
        },
      });
      setNewComments({ ...newComments, [thoughtId]: '' }); // Clear comment input
      setCommentFormVisible((prevState) => ({
        ...prevState,
        [thoughtId]: false, // Hide form after submission
      }));
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const renderComments = (comments) => {
    return (
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p className="comment-author">
              {comment.username} <span className="comment-date">{formatDateTime(comment.createdAt)}</span>
            </p>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="message-board">
      <h2 className="board-title">Band Posts</h2>
      {thoughts.length === 0 ? (
        <p className="no-thoughts">No posts yet! Start the conversation below.</p>
      ) : (
        thoughts.map((thought) => (
          <div key={thought.id} className="thought-card">
            <div className="thought-header">
              <span className="black-text">Posted by:&nbsp;&nbsp;</span>
              <span className="thought-author">{thought.username}</span>
              <span className="thought-date">
                <span className="black-text">&nbsp;&nbsp;on</span> {formatDateTime(thought.createdAt)}
              </span>
            </div>
            <div className="thought-body">{thought.body}</div>
            <button onClick={() => handleCommentButtonClick(thought.id)} className="comment-button">
              Leave a Comment
            </button>
            {commentFormVisible[thought.id] && (
              <div className="comment-form">
                <form onSubmit={(event) => handleCommentSubmit(thought.id, event)}>
                  <textarea
                    value={newComments[thought.id] || ''}
                    onChange={(e) => setNewComments({ ...newComments, [thought.id]: e.target.value })}
                    placeholder="Write your comment..."
                    rows="4"
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            )}
            {renderComments(thought.comments)} {/* Render comments directly from thought */}
          </div>
        ))
      )}
    </div>
  );
};

export default ThoughtList;