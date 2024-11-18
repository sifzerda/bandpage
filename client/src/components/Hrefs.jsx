import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Hrefs() {
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const handleLinkClick = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <div className="sidebar-container">
            <div className="button-container">
                <button
                    className={`toggle-btn ${isListVisible ? 'active' : ''}`}
                    onClick={toggleListVisibility}
                >
                    Subjects
                </button>
            </div>
            <div className={`list-content ${isListVisible ? 'visible' : ''}`}>
                <ol>
                    <li><Link to="/Genre" onMouseDown={handleLinkClick}>Genre</Link></li>
                    <li><Link to="/Types" onMouseDown={handleLinkClick}>Types</Link></li>
                    <li><Link to="/Techniques" onMouseDown={handleLinkClick}>Techniques</Link></li>
                    <li><Link to="/Tropes" onMouseDown={handleLinkClick}>Tropes</Link></li>
                    <li><Link to="/Scenes" onMouseDown={handleLinkClick}>Scenes</Link></li>
                    <li><Link to="/ScaryWords" onMouseDown={handleLinkClick}>Scary Words</Link></li>
                    <li><Link to="/References" onMouseDown={handleLinkClick}>References</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default Hrefs;