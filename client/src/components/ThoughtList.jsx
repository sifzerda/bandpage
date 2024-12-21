import { useQuery } from '@apollo/client';
import { GET_THOUGHTS } from '../utils/queries';

const ThoughtList = () => {
  // Fetch thoughts data using useQuery hook
  const { loading, error, data } = useQuery(GET_THOUGHTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Use all thoughts without filtering
  const thoughts = data?.getThoughts || [];

  return (
    <div>
      <h2>Posts</h2>
      {thoughts.length === 0 ? (
        <p>No thoughts have been posted.</p>
      ) : (
        thoughts.map((thought) => (
          <div key={thought.id} className="thought-card">
            <div className="thought-header">
              <p className="thought-author">By: {thought.username}</p>
              <p className="thought-date">{new Date(parseInt(thought.createdAt)).toLocaleString()}</p>
            </div>
            <p className="thought-text">{thought.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ThoughtList;