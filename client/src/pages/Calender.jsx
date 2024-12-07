import Cal from '../components/Cal';

export default function Calender() {
  return (
    <div className="contact-container">
      <h1>Jam Calender</h1>

      <div className="separator-line"></div>

      <div className="form-box">

        <h3>Instructions</h3>
        <h5>Click on your name to change availability</h5>

<div className='color-box'>

        <p className='red'>Red = Unavailable</p>
        <p className='green'>Green = Available</p>
        <p className='normal'>White = Undecided</p>
        
</div>

        <Cal />

      </div>

      <div className="separator-line"></div>

    </div>
  );
}
