import Cal from '../components/Cal';

export default function Calender() {
  return (
    <div className="contact-container">
      <h1>Calender</h1>

      <div className="separator-line"></div>

      <div className="separator-line"></div>

      <div className="form-box">

        <h3>Instructions</h3>
        <h5>Click on your name to change availability</h5>
        <h5>Red = Unavailable</h5>
        <h5>Green = Available</h5>

        <Cal />

      </div>

      <div className="separator-line"></div>

    </div>
  );
}
