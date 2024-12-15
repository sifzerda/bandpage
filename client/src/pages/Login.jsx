import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../App'; 

function Login(props) {
  const [formState, setFormState] = useState({ username: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error('Error:', e.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1-9">
      <Link to="/signup" className="back-link">← Go to Signup</Link>

      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group-z">
          <label htmlFor="username" className="label-z">Enter your name:</label>
          <input
            className="input-z"
            placeholder="your name"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        {error && (
          <div>
            <p className="error-text">The provided username is incorrect</p>
          </div>
        )}
        <div className="button-container-z">
          <button type="submit" className="submit-button-z">Submit</button>
        </div>
      </form>
    </div>
    
  );
}

export default Login;