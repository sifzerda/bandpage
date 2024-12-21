import { useQuery } from '@apollo/client';
import { GET_THOUGHTS } from '../utils/queries';

const ThoughtList = () => {
  const { loading, error, data } = useQuery(GET_THOUGHTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const thoughts = data?.getThoughts || [];

  return (
    <div className="message-board">
      <h2 className="board-title">Band Posts</h2>
      {thoughts.length === 0 ? (
        <p className="no-thoughts">No posts yet! Start the conversation below.</p>
      ) : (
        thoughts.map((thought) => (
          <div key={thought.id} className="thought-card">
            <div className="thought-header">
              <span className="thought-author">{thought.username}</span>
              <span className="thought-date">{new Date(parseInt(thought.createdAt)).toLocaleString()}</span>
            </div>
            <div className="thought-body">{thought.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ThoughtList;