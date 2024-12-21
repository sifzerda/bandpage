import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ username: '' });
  const [addUser] = useMutation(ADD_USER);
  const [inputFocus, setInputFocus] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <Link to="/login" className="back-link">← Go to Login</Link>

      <h2 className="login-title">Signup</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <div className="form-group-z">
          <label htmlFor="username" className="label-z">name:</label>
          <input
            className={`input-z ${inputFocus ? 'focused' : ''}`}
            placeholder="your name"
            name="username"
            type="text"
            id="username"
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