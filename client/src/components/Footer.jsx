import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">

          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti
            dicta, aliquam sequi voluptate quas.
          </p>

          <p className="footer-text">sifzerda</p>
          <p className="footer-text">2024</p>
          <a href="https://github.com/sifzerda/horror-fiction" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <br></br>

          <a href="https://sparkling-faloodeh-5b05b8.netlify.app/" target="_blank" rel="noopener noreferrer">My Project Portfolio</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;








