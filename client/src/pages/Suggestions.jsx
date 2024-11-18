import ContactForm from '../components/ContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import YouTubeSearch from '../components/YouTubeSearch';

export default function Suggestions() {
  return (
    <div className="contact-container">
      <h1>Find Songs</h1>

      <div className="separator-line"></div>

      <div className="contact-icons">
        <div className="icon-container">
          <a href="https://youtube.com" className="icon">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <p className='contact-text'>YouTube</p>
        </div>

      </div>

      <div className="separator-line"></div>
 
{/* ------------ YT Search --------------*/}

<div>
<YouTubeSearch />
</div>

{/* ------------ ------------------------*/}


      <div className="separator-line"></div>

    </div>
  );
}
