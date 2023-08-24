
import style from './cards.module.css'
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill} from "react-icons/bs";



export default function cards () {

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

    return (
    <>     
        <section id = 'programsection3'>
            <h3 className={style.primaryHeading1}>Venues On a Budget</h3>
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
