import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { ADD_THOUGHT } from '../utils/mutations';
import { toast } from 'react-toastify';
import '../App.css';

export default function ThoughtForm() {
    const [thought, setThought] = useState('');

    // Fetch user data
    const { data } = useQuery(QUERY_ME);
    const userId = data?.me?._id; // Get the user ID
    const username = data?.me?.username || 'Anonymous';

    // Define mutation
    const [addThought] = useMutation(ADD_THOUGHT, {
        refetchQueries: [{ query: QUERY_ME }], // Refetch user data after adding a thought
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (thought.trim() && userId) {
            try {
                await addThought({
                    variables: {
                        userId: userId,
                        username: username,
                        body: thought,
                    },
                });
                // Clear input field after submission
                setThought('');
            } catch (err) {
            }
        }
    };

    return (
        <div className="thought-form">
            <h4>Leave a Message</h4>

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
                    You need to be logged in to leave a message. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.
                </p>
            )}
        </div>
    );
}