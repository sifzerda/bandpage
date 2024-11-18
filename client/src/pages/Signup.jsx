import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  console.log('addUser:', addUser);  
  console.log('addUser options:', addUser.options);
  console.log('addUser mutation:', addUser.mutation);
  const [inputFocus, setInputFocus] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    console.log('Mutation response:', mutationResponse);
    const token = mutationResponse.data.addUser.token;
    console.log('Received token:', token);
    Auth.login(token);
    console.log('User logged in successfully.');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('Updating form state...');
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1-9">
      <Link to="/login" className="back-link">← Go to Login</Link>

      <h2 className="login-title">Signup</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <div className="form-group-z">
          <label htmlFor="username" className="label-z">Username:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <div className="form-group-z">
          <label htmlFor="email" className="label-z">Email:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <div className="form-group-z">
          <label htmlFor="password" className="label-z">Password:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
        <div className="button-container-z">
          <button type="submit" className="submit-button-z">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;