import React from 'react';
import '../App.css';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function About() {
  return (
    <>
      <div>
        <h1>Message Board</h1>
        <p>Current news and activities goes here:</p>

        <ThoughtForm />
        <ThoughtList />

      </div>
    </>
  );
}
