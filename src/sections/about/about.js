
import style from './about.module.css';
import ReactPlayer from 'react-player/lazy';

export default function About() {
  return (<><h3 className={style.heading}>See what our <span style={{color:'purple'}}>customers</span> say!</h3>
  <section className={style.wrapper} id='abo'>
    
    <div className={style.videoContainer}>
      <ReactPlayer
        url='https://youtu.be/VJk-MvjbUIw?si=gHV6ksx3qx6j-3rd'
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
    <div className={style.videoContainer}>
      <ReactPlayer
        url='https://youtu.be/-Bmw5-6O7WA?si=dLGOhwdPyBMeEPxK'
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  
</section>
  </>
    
  );
}


