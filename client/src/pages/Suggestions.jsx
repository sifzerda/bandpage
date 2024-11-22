import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import YouTubeSearch from '../components/YouTubeSearch';
import { useOutletContext } from 'react-router-dom';

export default function Suggestions() {
  const { handleSaveVideo } = useOutletContext();

  return (
    <div className="contact-container">
      <h1>Find Songs</h1>

      <div className="separator-line"></div>

      <div className="contact-icons">
        <div className="icon-container">
          <a href="https://youtube.com" className="icon">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <p className="contact-text">YouTube</p>
        </div>
      </div>

      <div className="separator-line"></div>

      {/* YouTube Search */}
      <div>
        <YouTubeSearch onSaveVideo={handleSaveVideo} />
      </div>

      <div className="separator-line"></div>
    </div>
  );
}