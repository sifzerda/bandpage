import '../App.css';
import MusicPlayer from '../components/MusicPlayer';

export default function About () {
  return (
    <div>
      <h1>Current Activity</h1>

      <p className="separator-line"></p>

      <MusicPlayer />

      <div className="separator-line"></div>

      <p className='portfolio-bio'>
        Current news and activities goes here:
      </p>

      <div className="separator-line"></div>


    </div>
  );
}
