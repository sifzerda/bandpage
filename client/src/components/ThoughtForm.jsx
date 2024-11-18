import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { ADD_THOUGHT } from '../utils/mutations';
import '../App.css';

const pathName = window.location.pathname.split('/').pop(); // Extract pathname

export default function ThoughtForm() {
    const [thought, setThought] = useState('');

    // Fetch user data
    const { data } = useQuery(QUERY_ME);
    const userId = data?.me?._id;
    const username = data?.me?.username || 'Anonymous';

    // Define mutation
    const [addThought] = useMutation(ADD_THOUGHT, {
        // Refetch queries to update the UI
        refetchQueries: [{ query: QUERY_ME }],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting thought...");
        if (thought.trim() && userId) {
            try {
                console.log("Calling addThought mutation...");
                // Call the mutation
                await addThought({
                    variables: {
                        userId,
                        thoughtText: thought,
                        pageParams: pathName // Include the pathName as pageParams
                    }
                });
                console.log("Thought submitted successfully!");

                // Clear input field after submission
                setThought('');
                // Refresh the page (to update with posted thought automatically)
                window.location.reload();
            } catch (err) {
                console.error("Error submitting thought:", err); // Log any errors
            }
        }
    };

    return (
        <div className="thought-form">
            <h4>Leave a Comment</h4>

            {Auth.loggedIn() ? (
                <form onSubmit={handleSubmit} className="thought-form">
                    <div className="form-group-thought">
                        <label className="thought-label" htmlFor="thought"></label>
                        <textarea
                            id="thought"
                            className="form-control-thought"
                            value={thought}
                            onChange={(e) => setThought(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2-thought center">Submit</button>
                </form>
            ) : (
                <p>
                    You need to be logged in to post thoughts. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.
                </p>
            )}

            {/* Remove the local state for thoughts display */}

        </div>
    );
}