import { useQuery } from '@apollo/client';
import { GET_THOUGHTS } from '../utils/queries';

const ThoughtList = () => {
  const { loading, error, data } = useQuery(GET_THOUGHTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

  return (
    <div className="message-board">
      <h2 className="board-title">Band Posts</h2>
      {thoughts.length === 0 ? (
        <p className="no-thoughts">No posts yet! Start the conversation below.</p>
      ) : (
        thoughts.map((thought) => (
          <div key={thought.id} className="thought-card">
           <div className="thought-header">
              <span className='black-text'>Posted by:&nbsp;&nbsp;</span>
              <span className="thought-author">{thought.username}</span>
              <span className="thought-date"><span className='black-text'>&nbsp;&nbsp;on</span> {formatDateTime(thought.createdAt)}</span>
            </div>
            <div className="thought-body">{thought.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ThoughtList;