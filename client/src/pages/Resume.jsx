import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faListAlt, faPen, faSquare } from '@fortawesome/free-solid-svg-icons';


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <p className="separator"> ______
        <FontAwesomeIcon icon={faPen} />
        ______
        <FontAwesomeIcon icon={faLaptop} />
        ______
        <FontAwesomeIcon icon={faListAlt} />
        ______
      </p>

      <p className="resume">{`>>`}
        <a href="https://drive.google.com/uc?export=download&id=19pXHC5uFwu96z9P1fkHkhXiQm_8Ca9ZB">
          Download Resume
        </a>
        {`<<`}
      </p>

      <h3>Front-End Proficiencies</h3>

      <ul className="resume">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-End Proficiencies</h3>

      <ul className="resume">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

      <div className="blue-separator">
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
      </div>



    </div>
  );
}
