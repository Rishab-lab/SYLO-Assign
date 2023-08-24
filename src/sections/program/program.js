
import style from './progrm.module.css'
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill} from "react-icons/bs";



export default function ProgramSec () {

function GetTrainerCard ({data}) {
        
        return(
            <div className={style.card} id='pro'>
                <div className={style.imageWrapper}>
                <img 
                        width='100%'
                        height='100%'
                        alt='fgf'
                        src={data.programPic}
                    />

    
                </div> 
                <p className={style.programName}>{data.progamName}</p>
            </div>
        )
    }


    function handleClickLeftArrow () {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300
        
    }
    function handleClickRightArrow () {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }

    const programData = [
        {
            programPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfF1lqsgscHTk4i6pGMZ8RZK2W7yKH93a4Nxqy_y8hjnVZAtKz4WuALmV9Jsn6q15zm_8&usqp=CAU',
        },
        {
            programPic : 'https://img.freepik.com/premium-vector/luxury-royal-25-wedding-anniversary_1340-6751.jpg?size=626&ext=jpg&ga=GA1.2.123616727.1686953004&semt=sph',
        },
        {
            programPic : 'https://img.freepik.com/premium-vector/bride-be_749935-1761.jpg?size=626&ext=jpg&ga=GA1.1.123616727.1686953004&semt=ais',
          
        },
        {
            programPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtk84b3cbx0nsCWANAsOb1o8R2sS_e8z22w&usqp=CAU',
          
        },
        {
            programPic : 'https://img.freepik.com/free-vector/hand-drawn-family-reunion-illustration_52683-91031.jpg?size=626&ext=jpg&ga=GA1.1.123616727.1686953004&semt=sph',
          
        },
        
    ]


    const program = [
        {
            programPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpR_z1L1Xz7aZMsZP3vn5phe1lL0ZVDkwMtJCVDd-cDl5cuU4JKD47oGqeItm89-08oMU&usqp=CAU',
        },
        {
            programPic : 'https://img.freepik.com/free-vector/congratulations-card-template-with-graduation-cap_1308-5753.jpg?size=626&ext=jpg&ga=GA1.1.123616727.1686953004&semt=sph',
        },
        {
            programPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBAVUzasbddQZP8mrHWktr_LINCeX46ocjA&usqp=CAU',
          
        },
        {
            programPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mdM1jim-DDmWYLRVFhNkg0GC5oQU0MH88A&usqp=CAU',
          
        },
        {
            programPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlYN3OFlsW7QVR8JAbfJWbFhQKEuJ3qX_gLH4TVS-DoORCC2EnJpZGYAjv9IhkFRHiKM&usqp=CAU',
          
        },
        
    ]

    const Popular = [
        {
            programPic : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf',
            progamName : 'Burger King Burgers American Shivaji Nagar'
        },
        {
            programPic : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nobnx31741uiwnmvsvst',
            progamName : 'The Meals Junction North Indian Indiranagar'
        },
        {
            programPic : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vzhxq7jvtpx1qllxdbpp',
            progamName : 'Rollsking North Indian, Fast Food Koramangala'
          
        },
        {
            programPic : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv',
            progamName : 'Meghana Foods Biryani Andhra Koramangala'
        },
        {
            programPic : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426',
            progamName : 'KFC Burgers Biryani Vasanth Nagar'
        },
        
    ]

    return (<>
        <section id = 'programsection'>
            <h3 className={style.primaryHeading}> Dinesh, Whats Your Occation? </h3>
            <div className={style.wrapper}>

            <div className={style.scrollContainer}  id = "slider">
                {
                    programData.map((data,index) => (
                        <GetTrainerCard 
                            data = {data}
                            key = {index}
                        />
                    ))
                    
                }
            </div>

                <BsFillArrowRightCircleFill 
                    style={{fontSize : '2rem'}} 
                    onClick = {handleClickRightArrow}
                    className={style.rightArrow}
                    />
                <BsFillArrowLeftCircleFill 
                    style={{fontSize : '2rem'}} 
                    onClick = {handleClickLeftArrow}
                    className={style.leftArrow}
                    />

            </div>

        </section>
      
      <section id = 'programsection2'>     
      <div className={style.wrapper}>
      <div className={style.scrollContainer}  id = "slider">
          {
              program.map((data,index) => (
                  <GetTrainerCard 
                      data = {data}
                      key = {index}
                  />
              ))             
          }
      </div>

          <BsFillArrowRightCircleFill 
              style={{fontSize : '2rem'}} 
              onClick = {handleClickRightArrow}
              className={style.rightArrow}
              />
          <BsFillArrowLeftCircleFill 
              style={{fontSize : '2rem'}} 
              onClick = {handleClickLeftArrow}
              className={style.leftArrow}
              />

      </div>

  </section>
 
  <section id = 'programsection3'>
            <h3 className={style.primaryHeading1}>⭐Most Popular Venues⭐</h3>
            <div className={style.wrapper}>

            <div className={style.scrollContainer}  id = "slider">
                {
                    Popular.map((data,index) => (
                        <GetTrainerCard 
                            data = {data}
                            key = {index}
                        />
                    ))
                    
                }
            </div>

                <BsFillArrowRightCircleFill 
                    style={{fontSize : '2rem'}} 
                    onClick = {handleClickRightArrow}
                    className={style.rightArrow}
                    />
                <BsFillArrowLeftCircleFill 
                    style={{fontSize : '2rem'}} 
                    onClick = {handleClickLeftArrow}
                    className={style.leftArrow}
                    />
                
            </div>

        </section>
  
  </>
    )
}
