import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../../../client/src/utils/queries';

// Grabs URL path name and matches with 'pageParams' property of thought
const pathName = window.location.pathname.split('/').pop(); // Extract pathname

const ThoughtList = () => {
  // Fetch thoughts data using useQuery hook
  const { loading, error, data } = useQuery(QUERY_THOUGHTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter thoughts based on pageParams
  const filteredThoughts = data.thoughts.filter(thought => thought.pageParams === pathName);

  return (
    <div>
        <h2>Comments</h2>
        {filteredThoughts.map(thought => (
            <div key={thought._id} className="thought-card">
                <div className='thought-header'>
                    <p className='thought-author'>By: {thought.thoughtAuthor}</p>
                    <p className='thought-date'>{thought.createdAt}</p>
                </div>
                <p className='thought-text'>{thought.thoughtText}</p>
            </div>
        ))}
    </div>
);
};

export default ThoughtList;